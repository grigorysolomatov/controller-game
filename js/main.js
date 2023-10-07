const NOTES = [
    "Menues have sound.",
    "Use explicit random seed when shuffling - this way players can compete in minimizing moves.",
    "Structure style: scientific paper/presentation.",
    "Each act has a different color-theme. [also font? also images? also music?]",
    "Levels are split into 'acts' - each act is a 5-level block",
    "All scene changes are seamless. Use illusion of panning, as if everything is an a single plane?",
];

function get_act_config() {
    const acts = [
        {
            name: "Basics",
            levels: [
                {
                    name: "Dot",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                    ],
                    labels: ["white", "green"],
                }, // Dot
                {
                    name: "Line",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                    ],
                    labels: ["white", "green"],
                }, // Line
                {
                    name: "Small box",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                    ],
                    labels: ["white", "green"],
                }, // Small box
                {
                    name: "Rails",
                    layout: [
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                    ],
                    labels: ["white", "red"],
                }, // Rails
                {
                    name: "Large box",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 0, 0, 1 , 0],
                        [0, 1, 0, 0, 0, 1 , 0],
                        [0, 1, 0, 0, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Large box
            ],
        }, // Basics
        {
            name: "Lines",
            levels: [
                {
                    name: "Large dotted box",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 0, 0, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 0, 0, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Large dotted box
                {
                    name: "Window",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Window
                {
                    name: "Large window",
                    layout: [
                        [1, 1, 1, 1, 1, 1 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 1, 1, 1, 1, 1 , 1],
                    ],
                    labels: ["white", "green"],
                }, // Large window
                {
                    name: "Jenga",
                    layout: [
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Jenga
                {
                    name: "Tick tack toe",
                    layout: [
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Tick tack toe
            ],
        }, // Lines
        {
            name: "Boxes",
            levels: [
                {
                    name: "Large dotted box",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 0, 0, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 0, 0, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Large dotted box
                {
                    name: "Window",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Window
                {
                    name: "Large window",
                    layout: [
                        [1, 1, 1, 1, 1, 1 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 1, 1, 1, 1, 1 , 1],
                    ],
                    labels: ["white", "green"],
                }, // Large window
                {
                    name: "Jenga",
                    layout: [
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Jenga
                {
                    name: "Tick tack toe",
                    layout: [
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Tick tack toe
            ],
        }, // Boxes
        {
            name: "Colors",
            levels: [
                {
                    name: "Large dotted box",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 0, 0, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 0, 0, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Large dotted box
                {
                    name: "Window",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Window
                {
                    name: "Large window",
                    layout: [
                        [1, 1, 1, 1, 1, 1 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 1, 1, 1, 1, 1 , 1],
                    ],
                    labels: ["white", "green"],
                }, // Large window
                {
                    name: "Jenga",
                    layout: [
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Jenga
                {
                    name: "Tick tack toe",
                    layout: [
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Tick tack toe
            ],
        }, // Colors
        {
            name: "Flags",
            levels: [
                {
                    name: "Large dotted box",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 0, 0, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 0, 0, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Large dotted box
                {
                    name: "Window",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Window
                {
                    name: "Large window",
                    layout: [
                        [1, 1, 1, 1, 1, 1 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 0, 0, 1, 0, 0 , 1],
                        [1, 1, 1, 1, 1, 1 , 1],
                    ],
                    labels: ["white", "green"],
                }, // Large window
                {
                    name: "Jenga",
                    layout: [
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Jenga
                {
                    name: "Tick tack toe",
                    layout: [
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [1, 1, 1, 1, 1, 1 , 1],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                    ],
                    labels: ["white", "green"],
                }, // Tick tack toe
            ],
        }, // Flags
    ];
    const act_board = {
        nrows: 5,
        ncols: 1,
        step: 105,
        tile: {
            image: "tile",
            width: 100,
            tint: 0xffffff,
            depth: 0,
            state: {
                time: {
                    scale: 500,
                    tint: 200,
                },
                map: {
                    "default": {
                        scale: 1.0,
                        tint: 0xffffff,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: 0xffff00,
                    },
                }
            }
        },
    };
    const config = {
        window: {
            width: 1900,
            height: 900,
            color: 0x101010,
        },
        time: {
            select: 1500,
        },
        options: acts,
        options_board: act_board,
    };
    return config;
}
function get_level_config_old({act_idx}) {
    const act_config = get_act_config();
    const levels = act_config.options[act_idx].levels;
    const level_board = {
        nrows: 5,
        ncols: 1,
        step: 105,
        tile: {
            image: "tile",
            width: 100,
            tint: 0xffffff,
            depth: 0,
            state: {
                time: {
                    scale: 500,
                    tint: 200,
                },
                map: {
                    "default": {
                        scale: 1.0,
                        tint: 0xffffff,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: 0xff00ff,
                    },
                }
            }
        },
    };
    const config = {
        window: {
            width: 1900,
            height: 900,
            color: 0x101010,
        },
        levels: levels,
        level_board: level_board,
    };
    return config;
}
function get_level_config({act_idx}) {
    const act_config = get_act_config();
    const levels = act_config.options[act_idx].levels;
    const level_board = {
        nrows: 5,
        ncols: 1,
        step: 105,
        tile: {
            image: "tile",
            width: 100,
            tint: 0xffffff,
            depth: 0,
            state: {
                time: {
                    scale: 500,
                    tint: 200,
                },
                map: {
                    "default": {
                        scale: 1.0,
                        tint: 0xffffff,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: 0xff00ff,
                    },
                }
            }
        },
    };
    const config = {
        window: {
            width: 1900,
            height: 900,
            color: 0x101010,
        },
        time: {
            select: 1500,
        },
        options: levels,
        options_board: level_board,
    };
    return config;
}
function get_config({act_idx, level_idx}) {
    const levels = get_level_config({act_idx: act_idx}).options;
    const tile_board = {
        nrows: levels[level_idx].layout.length,
        ncols: levels[level_idx].layout[0].length,
        level: levels[level_idx], // TODO: Belongs here?
        step: 105,
        tile: {
            image: "tile",
            width: 100,
            tint: 0x444444,
            depth: 0,
            state: {
                time: {
                    scale: 500,
                    tint: 200,
                },
                map: {
                    "default": {
                        scale: 1.0,
                        tint: 0x606060,
                    },
                    "white": {
                        scale: 1.05,
                        tint: 0xffffff,
                    },
                    "green": {
                        scale: 1.05,
                        tint: 0x00ff00,
                    },
                    "red": {
                        scale: 1.05,
                        tint: 0xff0000,
                    },
                    "cursor": {
                        scale: 1.1,
                        tint: 0xcccc00,
                    },
                }
            }
        },
    };
    const ball_board = {
        nrows: tile_board.nrows,
        ncols: tile_board.ncols,
        step: tile_board.step,
        tile: {
            image: "agent",
            width: tile_board.tile.width*0.8,
            tint: tile_board.tile.tint,
            depth: tile_board.tile.depth+1,
            state: {
                time: {
                    scale: tile_board.tile.state.time.scale,
                    tint: tile_board.tile.state.time.tint,
                    move: 600, // TODO: does this belong here?
                },
                map: {
                    "white": {
                        scale: 1.0,
                        tint: 0xffffff,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: 0xffff88,
                    },
                    "red": {
                        scale: 1.0,
                        tint: 0xcc0000,
                    },
                    "green": {
                        scale: 1.0,
                        tint: 0x00cc00,
                    },
                    "blue": {
                        scale: 1.0,
                        tint: 0x0000cc,
                    },
                }
            }
        },
    };
    const config = {
        window: {
            width: 1900,
            height: 900,
            color: 0x101010,
        },
        time: {
            select: 1500,
        },
        tile_board: tile_board,
        ball_board: ball_board,
    };
    return config;
}
class LoadingScene extends Phaser.Scene {
    constructor() {
        super({ key: "LoadingScene" });
    }
    preload() {
        this.show_loading();

        this.load.image("tile", "assets/images/tile.svg");
        this.load.image("agent", "assets/images/agent.svg");
        this.load.image("screen_cover", "assets/images/screen_cover.svg");

        this.load.audio("swoosh", "assets/sounds/swoosh.wav");
        this.load.audio("click", "assets/sounds/click.mp3");
        this.load.audio("boom", 'assets/sounds/boom.wav');

        loadFont("BaseFont", "assets/fonts/Autour_One/AutourOne-Regular.ttf");
    }
    show_loading() {
        const config = get_act_config();
        this.add.text(
            0.5*config.window.width,
            0.5*config.window.height,
            "Loading",
            {
                font: "bold 50px Monospace",
                fill: "#ffffff",
            }
        ).setOrigin(0.5);
    }
    create() {
        //this.scene.start("GameScene");
        //this.scene.start("LevelScene");
        //this.scene.start("ActScene");
        this.scene.start("NewActScene", {
            config: get_act_config(),
            metatext: "Acts",
        });
    }
}
class OptionScene extends Phaser.Scene {
    init({config, metatext, option_idx}) {
        this.init_args = {config, metatext, option_idx};
    }
    create() {
        const config = this.init_args.config;

        // Tween screen cover ..................................................       
        const screen_cover = new ScreenCover({
            x: config.window.width*0.5,
            y: config.window.height*0.5,
            scene: this,
        }).setDepth(1);
        screen_cover.setTint(config.window.color);
        screen_cover.setAlpha(1);
        screen_cover.tween({
            targets: screen_cover,
            alpha: 0.0,
            ease: "Quint.Out",
            duration: config.time.select,
        });
        // Make metatext .......................................................
        
        this.metatext = this.add.text(
            0.25*config.window.width, // TODO: fix this hardcoding
            0.5*config.window.height, // TODO: fix this hardcoding
            this.init_args.metatext,
            {
                font: "bold 70px BaseFont", // TODO: Hardcoded values, move to config
                fill: "#ffffff",
            }
        ).setOrigin(0.5).setDepth(2);
        const metatext = this.metatext;
        // Make options board ..................................................
        const options_board = new Board({
            scene: this,
            x: config.window.width*0.4, // TODO: Hardcoded values
            y: config.window.height*0.5,
            config: config.options_board,
        });
        // .....................................................................

        options_board.foreach((row, col) => {
            // Get option data -------------------------------------------------
            const option_idx = options_board.config.ncols*row + col;
            const tile = options_board.tiles[row][col];            
            // Manipulate option data ------------------------------------------
            tile.setInteractive();
            new VisState(config.options_board.tile.state).inject({
                sprite: tile,
                state: "default",
            });
            let option_selected = false;
            // Make text -------------------------------------------------------
            const option_idx_text = this.add.text(
                tile.x,
                tile.y,
                option_idx + 1,
                {
                    font: "bold 40px BaseFont", // TODO: Hardcoded values, move to config
                    fill: "#ffffff",
                }
            ).setOrigin(0.5);

            const option_name_text = this.add.text(
                tile.x + tile.config.width,
                tile.y,
                config.options[option_idx].name,
                {
                    font: "bold 70px BaseFont", // TODO: Hardcoded values, move to config
                    fill: "#ffffff",
                }
            ).setOrigin(0.0, 0.5);
            // Get text data ---------------------------------------------------
            const original_option_idx_text_scale = option_idx_text.scale;
            // Camera goto prev_option -----------------------------------------            
            const camera = this.cameras.main;
            if (option_idx == this.init_args.option_idx) {
                console.log(this.init_args.parent_data)
                option_selected = true;
                option_name_text.setDepth(2);
                option_name_text.setScale(1.0);
                camera.scrollX = (option_name_text.x
                                  - config.window.width*0.5
                                  + metatext.x
                                  + option_name_text.width*0.5);
                camera.scrollY = option_name_text.y - config.window.height*0.5;

                this.tweens.add({
                    targets: option_name_text,
                    scale: tile.scale*original_option_idx_text_scale*3, // OBS!
                    ease: "Quint.Out",
                    duration: config.time.select,
                    onComplete: () => {
                        option_selected = false;
                        option_name_text.setDepth(0)
                    },
                });

                this.tweens.add({
                    targets: camera,
                    scrollX: 0,
                    scrollY: 0,
                    duration: config.time.select,
                    ease: "Quad.Out",
                });
            }            
            // Events ----------------------------------------------------------
            const on_pointerup = () => {
                if (option_selected) return;
                option_selected = true;

                // Reset state .................................................
                tile.state.set("default");
                //metatext.setDepth(0);
                // Tween screen cover ..........................................
                option_name_text.setDepth(2);
                const screen_cover = new ScreenCover({
                    x: config.window.width*0.5,
                    y: config.window.height*0.5,
                    scene: this,
                }).setDepth(1);
                screen_cover.setTint(config.window.color);
                screen_cover.tween({
                    targets: screen_cover,
                    alpha: 1.0,
                    ease: "Quint.Out",
                    duration: config.time.select*0.9,
                });
                // Tween camera ................................................
                const camera = this.cameras.main;
                const camera_pos = {x: camera.x, y: camera.y};
                this.tweens.add({
                    targets: camera,
                    scrollX: (option_name_text.x
                              - config.window.width*0.5
                              + metatext.x
                              + option_name_text.width*0.5),
                    scrollY: option_name_text.y - config.window.height*0.5,
                    duration: config.time.select,
                    ease: "Quint.Out",
                });
                // Tween option text scale .....................................
                this.tweens.add({
                    targets: option_name_text,
                    scale: metatext.scale, // TODO: fix this hardcoding
                    ease: "Quint.Out",
                    duration: config.time.select,
                    onComplete: () => {
                        //this.scene.start("NewLevelScene", { // EYE
                        //    config: get_level_config({act_idx:option_idx}),
                        //    metatext: option_name_text.text,
                        //});
                        this.change_scene({                            
                            metatext: option_name_text.text,
                            option_idx: option_idx,
                        });
                    },
                });
                // .............................................................                
                
            };
            tile.on("pointerover", () => {
                if (option_selected) return;
                tile.state.set("hover");
            });
            tile.on("pointerout", () => {
                if (option_selected) return;
                tile.state.set("default");
            });
            tile.on("pointerup", () => {
                on_pointerup();
            });
            const original_act_idx_text_scale = option_idx_text.scale;

            tile.event_emitter.on("preUpdate", (time, delta) => {
                option_idx_text.scale = tile.scale*original_option_idx_text_scale*3; // TODO: Hardcoded number 3?
                option_name_text.setTint(tile.current_tint);

                if (option_selected) {return;}
                option_name_text.scale = tile.scale*original_option_idx_text_scale*3;
            });
            // -----------------------------------------------------------------
        });
    }
}
class NewActScene extends OptionScene {
    constructor() {
        super({ key: "NewActScene" });
    }
    change_scene({option_idx, metatext}) {
        this.scene.start("NewLevelScene", {
            config: get_level_config({act_idx:option_idx}),
            metatext: metatext,
        });
    }
}
class NewLevelScene extends OptionScene {
    constructor() {
        super({ key: "NewLevelScene" });
    }
    change_scene({option_idx, metatext}) {
        this.scene.start("GameScene", {
            act_idx: 0, // EYE
            level_idx: option_idx,
            metatext: metatext,
            on_release: (scene) => {
                scene.scene.start("NewLevelScene", {
                    metatext: this.metatext.text,
                    config: get_level_config({act_idx: 0}), // EYE
                    option_idx: option_idx,
                });
            },
        });
    }
}
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameScene" });
    }
    init({act_idx, level_idx, on_release, metatext}) {
        this.init_args = {act_idx, level_idx, on_release, metatext};
    }
    create() {
        const config = get_config({
            act_idx: this.init_args.act_idx,
            level_idx: this.init_args.level_idx,
        });
        let cursor = {
            row: Math.floor(config.tile_board.nrows*0.5),
            col: Math.floor(config.tile_board.ncols*0.5),
        };

        // Create level name text ----------------------------------------------
        const metatext = this.add.text(
            config.window.width*0.25,
            config.window.height*0.5,
            this.init_args.metatext,
            {
                font: "bold 70px BaseFont", // TODO: Hardcoded values, move to config
                fill: "#ffffff",
            }
        ).setOrigin(0.5).setDepth(2);
        // Fade screen cover ---------------------------------------------------
        const screen_cover = new ScreenCover({
            x: config.window.width*0.5,
            y: config.window.height*0.5,
            scene: this,
        }).setDepth(1);
        screen_cover.setTint(config.window.color);
        screen_cover.setAlpha(1.0);
        screen_cover.tween({
            targets: screen_cover,
            alpha: 0.0,
            ease: "Quint.Out",
            duration: config.time.select,
        });
        // Make tile board -----------------------------------------------------
        const tile_board = new Board({
            scene: this,
            x: config.window.width*0.6,
            y: config.window.height*0.5,
            config: config.tile_board,
        });
        tile_board.foreach((row, col) => {
            const tile = tile_board.tiles[row][col];
            //tile.setInteractive();
            new VisState(config.tile_board.tile.state).inject({
                sprite: tile,
                state: "default",
            });
        });
        // Make ball board -----------------------------------------------------
        const ball_board = new Board({
            scene: this,
            x: config.window.width*0.6,
            y: config.window.height*0.5,
            config: config.ball_board,
        });
        ball_board.foreach((row, col) => {
            const tile = ball_board.tiles[row][col];
            new VisState(config.ball_board.tile.state).inject({
                sprite: tile,
                state: config.tile_board.level.labels[
                    config.tile_board.level.layout[row][col]
                ],
            });
            tile.state.block = true;
            // tile.setInteractive(); // TODO: Do I need this?
            tile.on("pointerover", () => {
                tile.state.set("hover");
                //cursor = {row: tile.row, col: tile.col};
            });
            tile.on("pointerout", () => {
                tile.state.set("white");
                //cursor = null;
            });
            tile.on("pointerup", () => {
                return;
                tile.state.block = false;
                tile.state.cycle(["green", "blue", "red", "hover"]);
                tile.state.block = (tile.state.get() != "hover");
            });
        });
        // Local state ---------------------------------------------------------
        const correct_state = ball_board.get_state(); // Constant
        let playing = false;
        let viewing_correct = false;
        let shuffling = false;
        // Events --------------------------------------------------------------
        const on_step = (offset) => {
            if (!playing) {return;}

            let click = this.sound.add("click").setVolume(0.1).play();

            const prev_state = (viewing_correct)? correct_state[cursor.row][cursor.col] : "default";
            tile_board.tiles[cursor.row][cursor.col].state.set(prev_state);

            cursor.row += offset.row;
            cursor.col += offset.col;
            cursor.row = (cursor.row + tile_board.config.nrows) % tile_board.config.nrows;
            cursor.col = (cursor.col + tile_board.config.ncols) % tile_board.config.ncols;
            tile_board.tiles[cursor.row][cursor.col].state.set("cursor");
        };
        const on_twist = (reverse) => {
            if (!playing) {return;}

            this.sound.play("swoosh");

            if (cursor.row == 0
                || cursor.col == 0
                || cursor.row == tile_board.config.nrows-1
                || cursor.col == tile_board.config.ncols-1) {
                return;
            }
            let cycle = pos_circ(cursor);
            if (reverse) {cycle = cycle.reverse();}

            ball_board.cycle({pos_list: cycle});
            ball_board.cycle({pos_list: cycle, onComplete: () => {
                try_win();
            }});
        };

        const on_next_scene = () => {
            this.init_args.on_release(this);
        };
        
        const try_win = () => {
            if (!playing) {return;}

            // TODO: Inefficient because of strings. Use int instead?
            const current_state = ball_board.get_state();
            if (!compare2DArrays(current_state, correct_state)) {return;}

            this.sound.play("boom");

            playing = false;
            tile_board.tiles[cursor.row][cursor.col].state.set("default");
            ball_board.foreach((row, col) => {
                const tile = ball_board.tiles[row][col];
                const original_scale = tile.scale;
                this.tweens.add({
                    targets: tile,
                    scale: {from: original_scale, to: original_scale*0.8},
                    ease: "Quint.Out",
                    duration: 500,
                    onComplete: () => {
                        this.tweens.add({
                            targets: tile,
                            scale: {from: original_scale*0.8, to: original_scale},
                            ease: "Quint.Out",
                            duration: 1000,
                        });
                    }
                });
            });
            tile_board.foreach((row, col) => {
                tile_board.tiles[row][col].state.set(correct_state[row][col]);
                this.time.addEvent({
                    delay: 500,
                    callback: () => {
                        tile_board.tiles[row][col].state.set("default");
                    },
                });
            });

            this.time.addEvent({
                delay: 1000,
                callback: () => {
                    metatext.setDepth(2);
                    const screen_cover = new ScreenCover({
                        x: config.window.width*0.5,
                        y: config.window.height*0.5,
                        scene: this,
                    }).setDepth(1);
                    screen_cover.setTint(config.window.color);
                    screen_cover.tween({
                        targets: screen_cover,
                        alpha: 1.0,
                        ease: "Quint.Out",
                        duration: config.time.select*0.3,
                        onComplete: () => {
                            on_next_scene();
                        },
                    });
                },
            });
        };

        this.input.keyboard.on("keydown_E", (e) => {
            on_twist(false);
        });
        this.input.keyboard.on("keydown_Q", (e) => {
            on_twist(true);
        });
        this.input.keyboard.on("keydown_W", (e) => {
            on_step({row:-1, col:0});
        });
        this.input.keyboard.on("keydown_S", (e) => {
            on_step({row:1, col:0});
        });
        this.input.keyboard.on("keydown_A", (e) => {
            on_step({row:0, col:-1});
        });
        this.input.keyboard.on("keydown_D", (e) => {
            on_step({row:0, col:1});
        });
        
        this.input.keyboard.on("keydown_R", (e) => {
            viewing_correct = true;
            tile_board.foreach((row, col) => {
                tile_board.tiles[row][col].state.set(correct_state[row][col]);
            });
        });
        this.input.keyboard.on("keyup_R", (e) => {
            viewing_correct = false;
            tile_board.foreach((row, col) => {
                tile_board.tiles[row][col].state.set("default");
            });
            if (playing) {
                tile_board.tiles[cursor.row][cursor.col].state.set("cursor");
            }
        });
        
        this.input.keyboard.on("keydown_SPACE", (e) => {
            if (playing) {return;}
            if (shuffling) {return;}

            shuffling = true;

            const shuffle_steps =  1;// ball_board.config.nrows*ball_board.config.ncols; // 5;
            for (let t=0; t < shuffle_steps; t++) {
                this.time.addEvent({
                    delay: t*180,
                    callback: () => {
                        this.sound.play("swoosh");
                        const rand_pos = {
                            row: Math.floor(1 + Math.random()*(tile_board.config.nrows-2)),
                            col: Math.floor(1 + Math.random()*(tile_board.config.ncols-2)),
                        };
                        let circ = pos_circ(rand_pos);
                        if (Math.random() < 0.5) {
                            circ = circ.reverse();
                        }
                        ball_board.cycle({pos_list: circ}); // TODO: use onComplete
                        ball_board.cycle({pos_list: circ});
                        if (t==shuffle_steps-1) {
                            playing = true;
                            shuffling = false;
                            tile_board.tiles[cursor.row][cursor.col].state.set("cursor");
                        }
                    },
                });
            }
        });
        // ---------------------------------------------------------------------
    }
}

class Sprite extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, config}) {
        super(scene, x, y, config.image);

        this.config = config;

        this.current_tint = config.tint;

        this.set_width(config.width);
        this.setTint(config.tint);
        this.setDepth(config.depth);

        this.event_emitter = new Phaser.Events.EventEmitter();

        scene.add.existing(this);
    }
    set_width(width) {
        this.displayWidth = width;
        this.scaleY = this.scaleX;
    }
    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        this.event_emitter.emit("preUpdate", time, delta);
    }
}
class VisState {
    constructor(config) {
        this.state = null;
        this.config = config;
        this.block = false;
    }
    inject({sprite, state}) {
        this.sprite = sprite;
        this.sprite.state = this;
        this.original_scale = this.sprite.scale;
        this.set(state);
    }
    get() {
        return this.state;
    }
    set(state) {
        if (this.block) {return;}

        // Scale ---------------------------------------------------------------
        this.sprite.scene.tweens.add({
            targets: this.sprite,
            scale: this.original_scale*this.config.map[state].scale,
            ease: "Quint.Out",
            duration: this.config.time.scale,
        });

        // Tint ----------------------------------------------------------------
        this.state = this.state || state;
        let current_tint = ColorFunctions.hexIntToRGB(this.config.map[this.state].tint);
        let target_tint = ColorFunctions.hexIntToRGB(this.config.map[state].tint);

        this.sprite.scene.tweens.add({
            targets: current_tint,
            r: target_tint.r,
            g: target_tint.g,
            b: target_tint.b,
            ease: "Sin",
            duration: this.config.time.tint,
            onUpdate: (tween) => {
                let combined_tint = (current_tint.r << 16) | (current_tint.g << 8) | current_tint.b;
                this.sprite.setTint(combined_tint);
                this.sprite.current_tint = combined_tint;
            }
        });

        // Update --------------------------------------------------------------
        this.state = state;
    }
    cycle(states) {
        for (let i = 0; i < states.length; i++) {
            if (this.state == states[i]) {
                this.set(states[(i+1) % states.length]);
                return;
            }
        }
        this.set(states[0]);
    }
}
class Board {
    constructor({scene, x, y, config}) {
        this.scene = scene;
        this.config = config;

        // this.tiles[X][Y], X: left-to-right, Y: top-to-bottom
        this.tiles = Array(config.nrows).fill().map((_,row) =>
            Array(config.ncols).fill().map((_,col) => {
                const tile = new Sprite({
                    scene: scene,
                    x: config.step*col + x - (config.ncols - 1)*config.step/2,
                    y: config.step*row + y - (config.nrows - 1)*config.step/2,
                    config: config.tile,
                });
                // WARNING: Creating new fields --------------------------------
                tile.row = row;
                tile.col = col;
                tile.prev_x = tile.x;
                tile.prev_y = tile.y;
                tile.next_x = tile.x;
                tile.next_y = tile.y;
                // -------------------------------------------------------------
                return tile;
            })
        );
    }
    foreach(func) {
        for (let row = 0; row < this.config.nrows; row++) {
            for (let col = 0; col < this.config.ncols; col++) {
                func(row, col);
            }
        }
    }
    cycle({pos_list, onComplete}) {
        const first = this.tiles[pos_list[0].row][pos_list[0].col];
        const second = this.tiles[pos_list[1].row][pos_list[1].col];
        const second_prev_x = second.prev_x;
        const second_prev_y = second.prev_y;

        for (let i = 0; i < pos_list.length; i++) {
            const lpos = pos_list[i];
            const rpos = pos_list[(i+1) % pos_list.length];
            const ltile = this.tiles[lpos.row][lpos.col];
            const rtile = this.tiles[rpos.row][rpos.col];
            // WARNING: Manipulating shady fields ------------------------------
            ltile.next_x = rtile.prev_x;
            ltile.next_y = rtile.prev_y;
            // -----------------------------------------------------------------

            ltile.tween_pos({
                x: ltile.next_x,
                y: ltile.next_y,
                onComplete: (i == pos_list.length-1)? onComplete : undefined,
            });
        }
        for (let i = 0; i < pos_list.length; i++) {
            const pos = pos_list[i];
            const tile = this.tiles[pos.row][pos.col];
            tile.prev_x = tile.next_x;
            tile.prev_y = tile.next_y;
        }
        for (let i = pos_list.length-1; i > 0 ; i--) {
            const left = pos_list[i];
            const right = pos_list[(i+1) % pos_list.length];

            const left_tile = this.tiles[left.row][left.col];
            left_tile.row = right.row;
            left_tile.col = right.col;
            this.tiles[right.row][right.col] = left_tile;
        }
        first.row = pos_list[1].row;
        first.col = pos_list[1].col;
        this.tiles[pos_list[1].row][pos_list[1].col] = first;

        // WARNING: Manipulating shady fields ----------------------------------
        first.next_x = second_prev_x;
        first.next_y = second_prev_y;
        first.prev_x = second_prev_x;
        first.prev_y = second_prev_y;
        // ---------------------------------------------------------------------
    }
    get_state() {
        const state = Array(this.config.nrows).fill().map((_,row) =>
            Array(this.config.ncols).fill().map((_,col) => null));

        this.foreach((row, col) => {
            state[row][col] = this.tiles[row][col].state.get()
        });

        return state;
    }
}
class ColorFunctions {
    static hexIntToRGB(hexInt) {
        const r = (hexInt >> 16) & 255;
        const g = (hexInt >> 8) & 255;
        const b = hexInt & 255;
        return {r:r, g:g, b:b};
    }
    static rgbToHexInt({r, g, b}) {
        return (r << 16) + (g << 8) + b;
    }
}
class ScreenCover extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y}) {
        //let config = get_config(); ??
        super(scene, x, y, "screen_cover");

        this.alpha = 0;
        this.displayWidth = 5000; // TODO: Get from config
        this.scaleY = this.scaleX;

        //this.alpha = 0;
        //
        //this.setDepth(depth);

        scene.add.existing(this);
    }
    tween(tween_config) {
        this.scene.tweens.add(tween_config);
    }
}
const TweenMethods = {
    tween_pos({x,y, onComplete}) {
        this.scene.tweens.add({
            targets: this,
            x: x,
            y: y,
            ease: "Quint.Out",
            duration: this.config.state.time.move,
            onComplete: onComplete, // TODO: Remove?
        });
    },
};
Object.assign(Sprite.prototype, TweenMethods);
// Helpers /////////////////////////////////////////////////////////////////////
function compare2DArrays(array1, array2) {
    // Made by GPT
    if (array1.length !== array2.length) return false;

    return array1.every((subArray1, index) => {
        const subArray2 = array2[index];

        if (subArray1.length !== subArray2.length) return false;

        return subArray1.every((value, subIndex) => value === subArray2[subIndex]);
    });
}
function pos_circ(pos) {
    return [
        {row: -1 + pos.row, col: -1 + pos.col},
        {row: -1 + pos.row, col: 0 + pos.col},
        {row: -1 + pos.row, col: 1 + pos.col},
        {row: 0  + pos.row, col: 1 + pos.col},
        {row: 1  + pos.row, col: 1 + pos.col},
        {row: 1  + pos.row, col: 0 + pos.col},
        {row: 1  + pos.row, col: -1 + pos.col},
        {row: 0  + pos.row, col: -1 + pos.col},
    ]
}
function loadFont(name, url) {
    // https://stackoverflow.com/questions/51217147/how-to-use-a-local-font-in-phaser-3
    var newFont = new FontFace(name, `url(${url})`);
    newFont.load().then(function (loaded) {
        document.fonts.add(loaded);
    }).catch(function (error) {
        return error;
    });
}
// Run /////////////////////////////////////////////////////////////////////////
const GLOBAL_CONFIG = get_act_config();
var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: GLOBAL_CONFIG.window.width,
    height: GLOBAL_CONFIG.window.height,
    backgroundColor: GLOBAL_CONFIG.window.color,
    scene: [LoadingScene, NewActScene, NewLevelScene, GameScene],
});
