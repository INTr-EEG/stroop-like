#!/bin/bash
#
# reduce-pngs.sh
# 2022-05-30
# 2022-06-09

# We do not want to make participants wait for minutes for resource files to 
# be downloaded before the experiment task starts. Children in particular 
# might become bored or distracted. So we want our files as small as possible 
# without visible loss of quality.

# We had an issue where imagemagick silently failed when attempting to resize 
# the original PNG files unless some very specific arguments were used. The 
# present solution is to create a PowerPoint 'factory.pptx' file, copy the 
# images onto slides, and save as new files. This process has to be initiated 
# to get images with transparent background in any case, so the other images 
# can just tag along for the ride. The newly-saved files have no issue with 
# imagemagick. For now, we aribitrarily fix a final image width of 600 pixels.

readonly WD="$(realpath "${BASH_SOURCE%/*}/")"
readonly SRC="$(realpath "${WD}/../dev-imgs/imgs-orig_2022-06-09")"
readonly DEST="$(realpath "${WD}/../dev-imgs/imgs_$(date +'%Y-%m-%d')")"

reduce_pngs() {
    mkdir -p "$DEST"

    for filepath in "$SRC"/*.png; do
        [[ -f "$filepath" ]] || continue
        local filename="${filepath##*/}"
        local filename="${filename// /-}"
        local png_file="${DEST}/${filename}"
        cp -v "$filepath" "$png_file"
    done

    pngquant \
        --force \
        --skip-if-larger \
        --ext '.png' \
        --speed 1 \
        --strip \
        -- "$DEST"/*.png
}

time reduce_pngs

# -----------------------------------------------------------------------------

exit 1

readonly SRC="$(realpath "${WD}/../dev-imgs/imgs-preprocessed_2022-05-30")"
readonly WIDTH=600
readonly MAX_JOBS=4

reduce_pngs_1() {
    mkdir -p "$DEST"

    for filepath in "$SRC"/*.png; do
        [[ -f "$filepath" ]] || continue

        (
            local filename="${filepath##*/}"
            local filename="${filename// /-}"
            local png_file="${DEST}/${filename}"

            echo convert "$filepath" -resize "$WIDTH" "$png_file"
            convert "$filepath" -resize "$WIDTH" "$png_file"
        ) &

        (( "$(jobs -pr | wc -l)" >= "$MAX_JOBS" )) && wait -n
    done
    wait
    echo 'convert done!'

    local pngs=( "$DEST"/*.png )
    (( "${#pngs[@]}" < 1 )) && exit 1

    pngquant \
        --force \
        --skip-if-larger \
        --ext '.png' \
        --speed 1 \
        --strip \
        -- "$DEST"/*.png

    echo 'pngquant done!'
}

time reduce_pngs

