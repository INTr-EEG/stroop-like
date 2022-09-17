# stroop-like

Link to current version: [stroop-like](https://intr-eeg.github.io/stroop-like/)

### Variants:

- 'Day/Night' (full)
- 'Day/Night' (3 year-old)
- 'Day/Night' (2 year-old)
- 'Elephant' (2 year-old)
- 'Crayon' (2 year-old)

### Data Dictionary

Variable         | Description
:--------------- | :-----------------------------------------------------------
expVersion       | experiment version (date last modified)
choice           | choice made for current trial
correct          | correct (1) or incorrect (0)
trial\_time      | time taken for current trial (seconds)
cumulative\_time | total time taken during trials so far up to current trial (seconds)
coords\_x        | list of x coordinates
coords\_y        | list of y coordinates
coords\_t        | list of times when respective x and y coordinates were taken (seconds)
end\_timestamp   | timestamp at the end of current trial
total\_seconds   | global time taken at the end of current trial (seconds)
blockNum         | block number
blockName        | block name
pracNum          | practice number (corresponds to rule number, but will be 'NA' for the non-practice trials)
tryNum           | try number (up to 3 tries, 0 for demo blocks)
maxScore         | maximum possible score for that block (also number of trials in block)
trialNum         | trial number within block
stimulus         | name of the stimulus
corrAns          | name of the correct choice
slideFile1       | filestem of instruction slide (if 3 slides are needed)
slideFile2       | filestem of instruction slide (if 2 slides are needed)
slideFile3       | filestem of instruction slide (if 1 slide is needed), or 'DEMO' for demo block
stimulus\_file   | relative path to stimulus image file
box1\_file       | relative path to box 1 image file
box2\_file       | relative path to box 2 image file
Task             | name of task being run
ID               | subject ID
Age              | subject's age (years; drop-down list)
Demo             | activate demo blocks
Debug            | activate debug mode

