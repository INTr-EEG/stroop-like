/******************** 
 * Stroop-Like Test *
 ********************/


// store info about the experiment session:
let expName = 'stroop-like';  // from the Builder filename that created this script
let expInfo = {'Task': ['Day/Night', 'Elephant', 'Crayon'], 'ID': '', 'Age (months)': '', 'Demo': ['No', 'Yes'], 'Debug': ['No', 'Yes']};

// Start code blocks for 'Before Experiment'

function within_box(obj, box) {
    /*
    Determine if object is within box
    - Squared difference in x (and y) coordinates
    should be less than the square of half the
    box width (and height)
    - That would mean the center of the object is
    within the box boundaries
    */
    var box_h, box_w, box_x, box_y, dx, dy, hh, hw, obj_x, obj_y;
    [obj_x, obj_y] = obj.pos;
    [box_x, box_y] = box.pos;
    [box_w, box_h] = box.size;
    [dx, dy] = [(obj_x - box_x), (obj_y - box_y)];
    [hw, hh] = [(box_w / 2), (box_h / 2)];
    return (((dx * dx) < (hw * hw)) && ((dy * dy) < (hh * hh)));
}

function snapped(obj1, obj2, func = within_box) {
    /*
    Determine if obj1 snapped to center of obj2
    - Check if obj1 is 'near' obj2, based on func
    - If yes, set the obj1's position to be
    equal to obj2's position and return True
    - Otherwise, do nothing and return False
    */
    if (func(obj1, obj2)) {
        obj1.pos = obj2.pos;
        return true;
    }
    return false;
}

function hide(obj) {
    obj.size = [0, 0];
    obj.autoDraw = false;
}

function unhide(obj, size) {
    obj.size = size;
    obj.autoDraw = true;
}

function make_img(name, file_path, pos = [0, 0], size = [0, 0]) {
    var img;
    [img] = [new visual.ImageStim({"win": psychoJS.window, "name": name, "image": file_path, "pos": pos, "size": size})];
    img.autoDraw = true;
    return img;
}

function make_slide(filename, pos = [0, 0], size = SLIDE_SIZE) {
    return make_img(filename, `imgs/slides/${filename}.png`, pos, size);
}

function make_sound(value, name = "sound") {
    var snd;
    [snd] = [new sound.Sound({"win": psychoJS.window, "value": value, "secs": (- 1), "stereo": true, "hamming": true, "name": name})];
    snd.setVolume(1.0);
    return snd;
}

function dist_sq(x1, y1, x2, y2) {
    var dx, dy;
    [dx, dy] = [(x2 - x1), (y2 - y1)];
    return ((dx * dx) + (dy * dy));
}

function round_dp(x, dp = 5) {
    var num;
    [num] = [Math.pow(10, dp)];
    return (Math.round((x * num)) / num);
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('#D8E6E4'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'},
    {'name': 'imgs/crayon/crayon-box-long.png', 'path': 'imgs/crayon/crayon-box-long.png'},
    {'name': 'imgs/crayon/crayon-box-short.png', 'path': 'imgs/crayon/crayon-box-short.png'},
    {'name': 'imgs/crayon/crayon-card-long-transp.png', 'path': 'imgs/crayon/crayon-card-long-transp.png'},
    {'name': 'imgs/crayon/crayon-card-short-transp.png', 'path': 'imgs/crayon/crayon-card-short-transp.png'},
    {'name': 'imgs/day-night/day-box.png', 'path': 'imgs/day-night/day-box.png'},
    {'name': 'imgs/day-night/day-redline.png', 'path': 'imgs/day-night/day-redline.png'},
    {'name': 'imgs/day-night/day.png', 'path': 'imgs/day-night/day.png'},
    {'name': 'imgs/day-night/deck.png', 'path': 'imgs/day-night/deck.png'},
    {'name': 'imgs/day-night/night-box.png', 'path': 'imgs/day-night/night-box.png'},
    {'name': 'imgs/day-night/night-redline.png', 'path': 'imgs/day-night/night-redline.png'},
    {'name': 'imgs/day-night/night.png', 'path': 'imgs/day-night/night.png'},
    {'name': 'imgs/elephant/elephant-box-big.png', 'path': 'imgs/elephant/elephant-box-big.png'},
    {'name': 'imgs/elephant/elephant-box-small.png', 'path': 'imgs/elephant/elephant-box-small.png'},
    {'name': 'imgs/elephant/elephant-card-big-transp.png', 'path': 'imgs/elephant/elephant-card-big-transp.png'},
    {'name': 'imgs/elephant/elephant-card-small-transp.png', 'path': 'imgs/elephant/elephant-card-small-transp.png'},
    {'name': 'imgs/elephant/penguin-box.png', 'path': 'imgs/elephant/penguin-box.png'},
    {'name': 'imgs/elephant/penguin-card-transp.png', 'path': 'imgs/elephant/penguin-card-transp.png'},
    {'name': 'imgs/slides/new-slide-1.png', 'path': 'imgs/slides/new-slide-1.png'},
    {'name': 'imgs/slides/new-slide-2.png', 'path': 'imgs/slides/new-slide-2.png'},
    {'name': 'imgs/slides/new-slide-3.png', 'path': 'imgs/slides/new-slide-3.png'},
    {'name': 'imgs/slides/new-slide-4.png', 'path': 'imgs/slides/new-slide-4.png'},
    {'name': 'imgs/slides/slide-03.png', 'path': 'imgs/slides/slide-03.png'},
    {'name': 'imgs/slides/slide-04.png', 'path': 'imgs/slides/slide-04.png'},
    {'name': 'imgs/slides/slide-06.png', 'path': 'imgs/slides/slide-06.png'},
    {'name': 'imgs/slides/slide-07.png', 'path': 'imgs/slides/slide-07.png'},
    {'name': 'imgs/slides/slide-09.png', 'path': 'imgs/slides/slide-09.png'},
    {'name': 'imgs/slides/slide-10.png', 'path': 'imgs/slides/slide-10.png'},
    {'name': 'sequences/crayon-2yo.csv', 'path': 'sequences/crayon-2yo.csv'},
    {'name': 'sequences/day-night-2yo.csv', 'path': 'sequences/day-night-2yo.csv'},
    {'name': 'sequences/day-night-3yo.csv', 'path': 'sequences/day-night-3yo.csv'},
    {'name': 'sequences/day-night-4yo.csv', 'path': 'sequences/day-night-4yo.csv'},
    {'name': 'sequences/elephant-2yo.csv', 'path': 'sequences/elephant-2yo.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var begin1Clock;
var SHOW_DEMO;
var SHOW_DEBUG;
var USE_AUDIO;
var TASK_NAME;
var age_months_str;
var age_months;
var conditions_file;
var EXIT_3_PRAC;
var PICTURE_DELAY;
var SLIDE_SIZE;
var CONTINUE_SIZE;
var CONTINUE_POS;
var DECK_SIZE;
var IMG_LEN;
var CARD_SIZE;
var BOX_SIZE;
var BOX_POS_1;
var BOX_POS_2;
var NEW_CARD_POS;
var CARD_STACK_POS;
var GLOBAL_CONT;
var terminate_experiment;
var practice_passed;
var inst_slide;
var inst_sound;
var MIN_DIST_SQ;
var DRAG_MOUSE;
var DAY_BOX;
var NIGHT_BOX;
var CARD_STACK;
var BIG_ELEPHANT_BOX;
var PENGUIN_BOX;
var SMALL_ELEPHANT_BOX;
var LONG_CRAYON_BOX;
var SHORT_CRAYON_BOX;
var stimulus_stem;
var cumulative_time;
var score;
var box1;
var box2;
var begin1Mouse;
var begin2Clock;
var begin2Mouse;
var begin3Clock;
var begin3Mouse;
var demoText;
var trialClock;
var trialHeader;
var trialFeedback;
var trialDebug;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin1"
  begin1Clock = new util.Clock();
  SHOW_DEMO = (expInfo["Demo"] === "Yes");
  SHOW_DEBUG = (expInfo["Debug"] === "Yes");
  USE_AUDIO = false;
  TASK_NAME = expInfo["Task"];
  age_months_str = expInfo["Age (months)"];
  /* Result will depend on the behavior of Number.parseFloat() */
  /* We know that it will at least interpret leading numbers, e.g. '123abc' as 123 */
  age_months = Number.parseFloat(age_months_str);
  if ((age_months.toString() === "NaN")) {
      throw `Invalid value for Age (months): "${age_months_str}". Please reload the page and provide a valid value.`;
  }
  /* Make this a function */
  if ((TASK_NAME === "Elephant")) {
      if ((age_months > 24)) {
          throw `No suitable conditions file for Elephant task for given age (${age_months} months). Please reload the page and provide an age that is 24 months or less.`;
      }
      conditions_file = "sequences/elephant-2yo.csv";
  } else {
      if ((TASK_NAME === "Crayon")) {
          if ((age_months > 24)) {
              throw `No suitable conditions file for Crayon task for given age (${age_months} months). Please reload the page and provide an age that is 24 months or less.`;
          }
          conditions_file = "sequences/crayon-2yo.csv";
      } else {
          if ((TASK_NAME === "Day/Night")) {
              if ((age_months <= 24)) {
                  conditions_file = "sequences/day-night-2yo.csv";
              } else {
                  if ((age_months <= 36)) {
                      conditions_file = "sequences/day-night-3yo.csv";
                  } else {
                      conditions_file = "sequences/day-night-4yo.csv";
                  }
              }
          }
      }
  }
  console.log(`age_months = ${age_months}`);
  console.log(`conditions_file = ${conditions_file}`);
  /* Exit if fail 3 repeat practices (disabled) */
  EXIT_3_PRAC = false;
  PICTURE_DELAY = 0.1;
  SLIDE_SIZE = [1.0, 0.562438];
  CONTINUE_SIZE = [0.228, 0.1];
  CONTINUE_POS = [0, (- 0.4)];
  DECK_SIZE = [0.2, 0.28];
  IMG_LEN = null;
  if ((TASK_NAME === "Day/Night")) {
      /* Cards: 180x260 */
      CARD_SIZE = [0.18, 0.26];
      /* Boxes: 450x370 (0.35 / 450 * 370 = 0.287778) */
      BOX_SIZE = [0.35, 0.287778];
  } else {
      /* Elephant and Crayon are the only others */
      /* New images: all 500x301 (make all same) */
      IMG_LEN = 0.6;
      BOX_SIZE = [IMG_LEN, ((IMG_LEN / 500) * 301)];
      CARD_SIZE = BOX_SIZE;
  }
  BOX_POS_1 = [(- 0.4), 0.15];
  BOX_POS_2 = [0.4, 0.15];
  NEW_CARD_POS = [0, (- 0.3)];
  CARD_STACK_POS = [(- 0.011), (- 0.291)];
  GLOBAL_CONT = make_img("GLOBAL_CONT", "imgs/continue.png", CONTINUE_POS, CONTINUE_SIZE);
  terminate_experiment = false;
  practice_passed = false;
  inst_slide = null;
  inst_sound = null;
  MIN_DIST_SQ = (0.005 * 0.005);
  DRAG_MOUSE = new core.Mouse({"win": psychoJS.window});
  DAY_BOX = make_img("day_box", "imgs/day-night/day-box.png", BOX_POS_1);
  NIGHT_BOX = make_img("night_box", "imgs/day-night/night-box.png", BOX_POS_2);
  CARD_STACK = make_img("card_stack", "imgs/day-night/deck.png", CARD_STACK_POS);
  BIG_ELEPHANT_BOX = make_img("big_elephant_box", "imgs/elephant/elephant-box-big.png", BOX_POS_1);
  PENGUIN_BOX = make_img("penguin_box", "imgs/elephant/penguin-box.png", BOX_POS_2);
  SMALL_ELEPHANT_BOX = make_img("small_elephant_box", "imgs/elephant/elephant-box-small.png", BOX_POS_2);
  LONG_CRAYON_BOX = make_img("long_crayon_box", "imgs/crayon/crayon-box-long.png", BOX_POS_1);
  SHORT_CRAYON_BOX = make_img("short_crayon_box", "imgs/crayon/crayon-box-short.png", BOX_POS_2);
  if ((TASK_NAME === "Day/Night")) {
      stimulus_stem = "imgs/day-night";
  } else {
      if ((TASK_NAME === "Elephant")) {
          stimulus_stem = "imgs/elephant";
      } else {
          if ((TASK_NAME === "Crayon")) {
              stimulus_stem = "imgs/crayon";
          }
      }
  }
  cumulative_time = 0.0;
  score = 0;
  box1 = null;
  box2 = null;
  
  begin1Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  begin1Mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "begin2"
  begin2Clock = new util.Clock();
  begin2Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  begin2Mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "begin3"
  begin3Clock = new util.Clock();
  begin3Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  begin3Mouse.mouseClock = new util.Clock();
  demoText = new visual.TextStim({
    win: psychoJS.window,
    name: 'demoText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trialHeader = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialHeader',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  trialFeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialFeedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  trialDebug = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialDebug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0.4], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, conditions_file, '0:'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(begin1RoutineBegin(snapshot));
      trialsLoopScheduler.add(begin1RoutineEachFrame());
      trialsLoopScheduler.add(begin1RoutineEnd());
      trialsLoopScheduler.add(begin2RoutineBegin(snapshot));
      trialsLoopScheduler.add(begin2RoutineEachFrame());
      trialsLoopScheduler.add(begin2RoutineEnd());
      trialsLoopScheduler.add(begin3RoutineBegin(snapshot));
      trialsLoopScheduler.add(begin3RoutineEachFrame());
      trialsLoopScheduler.add(begin3RoutineEnd());
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var is_demo;
var is_practice;
var gotValidClick;
var begin1Components;
function begin1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin1'-------
    t = 0;
    begin1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    is_demo = (tryNum === 0);
    is_practice = ((! is_demo) && (pracNum !== "NA"));
    if ((((slideFile1 === "NA") || practice_passed) || terminate_experiment)) {
        continueRoutine = false;
    } else {
        inst_slide = make_slide(slideFile1);
        unhide(GLOBAL_CONT, CONTINUE_SIZE);
        if (USE_AUDIO) {
            inst_sound = make_sound("aud/mp3/DN_intro.mp3");
            inst_sound.play();
        }
    }
    
    // setup some python lists for storing info about the begin1Mouse
    begin1Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    begin1Components = [];
    begin1Components.push(begin1Mouse);
    
    begin1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function begin1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin1'-------
    // get current time
    t = begin1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *begin1Mouse* updates
    if (t >= 0.2 && begin1Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin1Mouse.tStart = t;  // (not accounting for frame time here)
      begin1Mouse.frameNStart = frameN;  // exact frame index
      
      begin1Mouse.status = PsychoJS.Status.STARTED;
      begin1Mouse.mouseClock.reset();
      prevButtonState = begin1Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (begin1Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = begin1Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [GLOBAL_CONT]) {
            if (obj.contains(begin1Mouse)) {
              gotValidClick = true;
              begin1Mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    begin1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function begin1RoutineEnd() {
  return async function () {
    //------Ending Routine 'begin1'-------
    begin1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((slideFile1 !== "NA")) {
        hide(inst_slide);
        hide(GLOBAL_CONT);
        if (USE_AUDIO) {
            inst_sound.stop();
        }
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "begin1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var begin2Components;
function begin2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin2'-------
    t = 0;
    begin2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((((slideFile2 === "NA") || practice_passed) || terminate_experiment)) {
        continueRoutine = false;
    } else {
        inst_slide = make_slide(slideFile2);
        unhide(GLOBAL_CONT, CONTINUE_SIZE);
        if (USE_AUDIO) {
            inst_sound = make_sound(`aud/mp3/DN_rule${pracNum}.mp3`);
            inst_sound.play();
        }
    }
    
    // setup some python lists for storing info about the begin2Mouse
    begin2Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    begin2Components = [];
    begin2Components.push(begin2Mouse);
    
    begin2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function begin2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin2'-------
    // get current time
    t = begin2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *begin2Mouse* updates
    if (t >= 0.2 && begin2Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin2Mouse.tStart = t;  // (not accounting for frame time here)
      begin2Mouse.frameNStart = frameN;  // exact frame index
      
      begin2Mouse.status = PsychoJS.Status.STARTED;
      begin2Mouse.mouseClock.reset();
      prevButtonState = begin2Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (begin2Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = begin2Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [GLOBAL_CONT]) {
            if (obj.contains(begin2Mouse)) {
              gotValidClick = true;
              begin2Mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    begin2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function begin2RoutineEnd() {
  return async function () {
    //------Ending Routine 'begin2'-------
    begin2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((slideFile2 !== "NA")) {
        hide(inst_slide);
        hide(GLOBAL_CONT);
        if (USE_AUDIO) {
            inst_sound.stop();
        }
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "begin2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var begin3Components;
function begin3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin3'-------
    t = 0;
    begin3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (((((slideFile3 === "NA") || practice_passed) || terminate_experiment) || ((! SHOW_DEMO) && is_demo))) {
        continueRoutine = false;
    } else {
        if ((slideFile3 === "DEMO")) {
            demoText.text = "Now, I am going to show you how the game is played and then it will be your turn";
            unhide(GLOBAL_CONT, CONTINUE_SIZE);
        } else {
            inst_slide = make_slide(slideFile3);
            unhide(GLOBAL_CONT, CONTINUE_SIZE);
            if ((USE_AUDIO && (! is_practice))) {
                inst_sound = make_sound("aud/mp3/DN_aftprac.mp3");
                inst_sound.play();
            }
        }
    }
    
    // setup some python lists for storing info about the begin3Mouse
    begin3Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    begin3Components = [];
    begin3Components.push(begin3Mouse);
    begin3Components.push(demoText);
    
    begin3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function begin3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin3'-------
    // get current time
    t = begin3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *begin3Mouse* updates
    if (t >= 0.2 && begin3Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin3Mouse.tStart = t;  // (not accounting for frame time here)
      begin3Mouse.frameNStart = frameN;  // exact frame index
      
      begin3Mouse.status = PsychoJS.Status.STARTED;
      begin3Mouse.mouseClock.reset();
      prevButtonState = begin3Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (begin3Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = begin3Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [GLOBAL_CONT]) {
            if (obj.contains(begin3Mouse)) {
              gotValidClick = true;
              begin3Mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *demoText* updates
    if (((slideFile3 == 'DEMO')) && demoText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoText.tStart = t;  // (not accounting for frame time here)
      demoText.frameNStart = frameN;  // exact frame index
      
      demoText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    begin3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function begin3RoutineEnd() {
  return async function () {
    //------Ending Routine 'begin3'-------
    begin3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((slideFile3 === "DEMO")) {
        demoText.text = "";
        hide(GLOBAL_CONT);
    } else {
        if ((slideFile3 !== "NA")) {
            hide(inst_slide);
            hide(GLOBAL_CONT);
            if ((USE_AUDIO && (! is_practice))) {
                inst_sound.stop();
            }
        }
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "begin3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var dormant_card;
var active_card;
var moving_card;
var drag_in_process;
var feedback_delay_start;
var picture_delay_start;
var choice;
var correct;
var trial_time;
var x;
var y;
var coords_x;
var coords_y;
var coords_t;
var DRAG_MOUSE_state;
var prev_DRAG_MOUSE_state;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (((practice_passed || terminate_experiment) || ((! SHOW_DEMO) && is_demo))) {
        continueRoutine = false;
    } else {
        if ((trialNum === 1)) {
            if ((TASK_NAME === "Day/Night")) {
                box1 = DAY_BOX;
                box2 = NIGHT_BOX;
                unhide(CARD_STACK, DECK_SIZE);
            } else {
                if ((TASK_NAME === "Elephant")) {
                    if ((Number.parseInt(blockNum) <= 3)) {
                        box1 = BIG_ELEPHANT_BOX;
                        box2 = PENGUIN_BOX;
                    } else {
                        box1 = BIG_ELEPHANT_BOX;
                        box2 = SMALL_ELEPHANT_BOX;
                    }
                } else {
                    if ((TASK_NAME === "Crayon")) {
                        box1 = LONG_CRAYON_BOX;
                        box2 = SHORT_CRAYON_BOX;
                    }
                }
            }
            unhide(box1, BOX_SIZE);
            unhide(box2, BOX_SIZE);
        }
    }
    hide(GLOBAL_CONT);
    dormant_card = make_img(stimulus, stimulus_file, NEW_CARD_POS);
    active_card = null;
    moving_card = null;
    drag_in_process = false;
    if ((trialNum === maxScore)) {
        hide(CARD_STACK);
    }
    feedback_delay_start = null;
    picture_delay_start = 0.0;
    choice = null;
    correct = null;
    trial_time = null;
    x = 0;
    y = 0;
    coords_x = [];
    coords_y = [];
    coords_t = [];
    DRAG_MOUSE_state = 1;
    prev_DRAG_MOUSE_state = 0;
    
    trialHeader.setText(blockName);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialHeader);
    trialComponents.push(trialFeedback);
    trialComponents.push(trialDebug);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var feedback_delay;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (SHOW_DEBUG) {
        trialDebug.text = `tryNum = ${tryNum}
    trialNum = ${trialNum} (out of ${maxScore})
    score = ${score} (out of ${maxScore})
    globalClock = ${round(globalClock.getTime(), 3)}
    t = ${round(t, 3)}`
    ;
        if ((moving_card !== null)) {
            trialDebug.text += `
    moving_card.name = ${moving_card.name}
    pos = (${round(moving_card.pos[0], 3)}, ${round(moving_card.pos[1], 3)})`
    ;
        }
    }
    if ((feedback_delay_start !== null)) {
        if (is_practice) {
            feedback_delay = 0.5;
            if ((is_practice && (correct === 0))) {
                feedback_delay = 1.0;
            }
            if (((t - feedback_delay_start) > feedback_delay)) {
                continueRoutine = false;
            }
        } else {
            continueRoutine = false;
        }
    } else {
        if (((active_card === null) && (t > 0.05))) {
            active_card = dormant_card;
            unhide(active_card, CARD_SIZE);
        } else {
            if (((! drag_in_process) && (t > 0.1))) {
                DRAG_MOUSE_state = DRAG_MOUSE.getPressed()[0];
                if ((prev_DRAG_MOUSE_state !== DRAG_MOUSE_state)) {
                    prev_DRAG_MOUSE_state = DRAG_MOUSE_state;
                    if ((DRAG_MOUSE_state === 1)) {
                        if (DRAG_MOUSE.isPressedIn(active_card)) {
                            moving_card = active_card;
                            drag_in_process = true;
                        }
                    }
                }
            }
        }
    }
    if ((DRAG_MOUSE.getPressed()[0] === 1)) {
        if (drag_in_process) {
            [x, y] = moving_card.pos = DRAG_MOUSE.getPos();
            if ((coords_x.length > 0)) {
                if ((dist_sq(coords_x.slice((- 1))[0], coords_y.slice((- 1))[0], x, y) > MIN_DIST_SQ)) {
                    coords_x.push(round_dp(x));
                    coords_y.push(round_dp(y));
                    coords_t.push(round_dp(t));
                }
            } else {
                coords_x.push(round_dp(x));
                coords_y.push(round_dp(y));
                coords_t.push(round_dp(t));
            }
        }
    } else {
        drag_in_process = false;
        if ((moving_card !== null)) {
            if (snapped(moving_card, box1)) {
                choice = box1.name;
                hide(moving_card);
            } else {
                if (snapped(moving_card, box2)) {
                    choice = box2.name;
                    hide(moving_card);
                }
            }
            if ((choice !== null)) {
                trial_time = t;
                cumulative_time += t;
                feedback_delay_start = t;
                if ((choice === corrAns)) {
                    correct = 1;
                    trialFeedback.text = "Correct!";
                    score += 1;
                } else {
                    correct = 0;
                    trialFeedback.text = "Let's think again";
                }
            }
            moving_card = null;
        }
    }
    
    
    // *trialHeader* updates
    if (t >= 0.0 && trialHeader.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialHeader.tStart = t;  // (not accounting for frame time here)
      trialHeader.frameNStart = frameN;  // exact frame index
      
      trialHeader.setAutoDraw(true);
    }

    
    // *trialFeedback* updates
    if ((is_practice) && trialFeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialFeedback.tStart = t;  // (not accounting for frame time here)
      trialFeedback.frameNStart = frameN;  // exact frame index
      
      trialFeedback.setAutoDraw(true);
    }

    
    // *trialDebug* updates
    if ((SHOW_DEBUG) && trialDebug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialDebug.tStart = t;  // (not accounting for frame time here)
      trialDebug.frameNStart = frameN;  // exact frame index
      
      trialDebug.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((trialNum === maxScore)) {
        /* Last trial of the block */
        if ((box1 !== null)) {
            hide(box1);
        }
        if ((box2 !== null)) {
            hide(box2);
        }
        hide(CARD_STACK);
        if (((age_months > 24) && (tryNum === 3))) {
            if ((((! practice_passed) && EXIT_3_PRAC) && (score < maxScore))) {
                terminate_experiment = true;
            }
            practice_passed = false;
        }
        if (((age_months <= 24) && (tryNum === 1))) {
            if ((((! practice_passed) && EXIT_3_PRAC) && (score < maxScore))) {
                terminate_experiment = true;
            }
            practice_passed = false;
        } else {
            if ((is_practice && (score === maxScore))) {
                practice_passed = true;
            }
        }
        score = 0;
    }
    trialFeedback.text = "";
    psychoJS.experiment.addData("choice", choice);
    psychoJS.experiment.addData("correct", correct);
    psychoJS.experiment.addData("trial_time", trial_time);
    psychoJS.experiment.addData("cumulative_time", cumulative_time);
    psychoJS.experiment.addData("coords_x", coords_x);
    psychoJS.experiment.addData("coords_y", coords_y);
    psychoJS.experiment.addData("coords_t", coords_t);
    psychoJS.experiment.addData("end_timestamp", util.MonotonicClock.getDateStr());
    psychoJS.experiment.addData("total_seconds", globalClock.getTime());
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
