#!/usr/bin/env python3
#
# create-sequences.py
# 2022-05-30

from __future__ import annotations

import csv

COLS = [
    "blockNum",
    "blockName",
    "pracNum",
    "tryNum",
    "maxScore",
    "trialNum",
    "stimulus",
    "corrAns",
    "slideFile1",
    "slideFile2",
    "slideFile3",
]

def create_block(stimuli, correct_answers):
    max_score = len(stimuli)
    dcts = []
    for i, (stimulus, correct_answer) in enumerate(zip(stimuli, correct_answers), start=1):
        dct = {
            "maxScore": max_score,
            "trialNum": i,
            "stimulus": stimulus,
            "corrAns": correct_answer,
        }
        dcts.append(dct)
    return dcts

def main():
    stimuli = [
        "long-crayon",
        "short-crayon",
        "long-crayon",
        "short-crayon",
        "short-crayon",
        "long-crayon",
        "long-crayon",
        "short-crayon",
    ]
    correct_answers = [
        "long_crayon_box",
        "short_crayon_box",
        "long_crayon_box",
        "short_crayon_box",
        "short_crayon_box",
        "long_crayon_box",
        "long_crayon_box",
        "short_crayon_box",
    ]
    from pprint import pp
    pp(create_block(stimuli, correct_answers))

if __name__ == "__main__":
    main()



