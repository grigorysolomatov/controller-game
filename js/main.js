const NOTES = [
    "Holding direction button repeats step.",
    "Menues have sound.",
    "Use explicit random seed when shuffling - this way players can compete in minimizing moves.",
    "Structure style: scientific paper/presentation.",
    "Each act has a different color-theme. [also font? also images? also music?]",
    "Levels are split into 'acts' - each act is a 5-level block",
    "All scene changes are seamless. Use illusion of panning, as if everything is an a single plane?",
];

function get_menu_config() {
    const options = [
        {"name": "Levels"},
        {"name": "Controls"},
        {"name": "Editor"},
    ];
    const options_board = {
        nrows: options.length,
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
            select: 1000,
            fadein: 500,
        },
        options: options,
        options_board: options_board,
    };
    return config;
}
function get_controls_config() {
    const options = [
        {
            name: "Left",
            key: "step_left",
        },
        {
            name: "Right",
            key: "step_right",
        },
        {
            name: "Up",
            key: "step_up",
        },
        {
            name: "Down",
            key: "step_down",
        },
        {
            name: "Twist left",
            key: "twist_left",
        },
        {
            name: "Twist right",
            key: "twist_right",
        },
        {
            name: "Accept",
            key: "accept",
        },
        {
            name: "Escape",
            key: "escape",
        },
    ];
    const options_board = {
        nrows: options.length,
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
            select: 1000,
            fadein: 500,
        },
        options: options,
        options_board: options_board,
    };
    return config;
}
function get_setcontrols_config() {
    const config = {
        window: {
            width: 1900,
            height: 900,
            color: 0x101010,
        },
        time: {
            select: 1000,
            fadein: 500,
        },
    };
    return config;
}
function get_editor_config() {
    const options = [
        {"name": "A"},
        {"name": "B"},
        {"name": "C"},
        {"name": "D"},
        {"name": "E"},
    ];
    const options_board = {
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
            select: 1000,
            fadein: 500,
        },
        options: options,
        options_board: options_board,
    };
    return config;
}
function get_act_config() {
    const acts = [
        {
            name: "Dots",
            levels: [
                {
                    name: "One",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                    ],
                    labels: ["black", "white"],
                }, // One
                {
                    name: "Four",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                    ],
                    labels: ["black", "white"],
                }, // Four
                {
                    name: "Nine",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 1, 0, 1, 0, 1, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 1, 0, 1, 0, 1, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 1, 0, 1, 0, 1, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                    ],
                    labels: ["black", "white"],
                }, // Nine
                {
                    name: "Sixteen",
                    layout: [
                        [1, 0, 1, 0, 1, 0, 1],
                        [0, 0, 0, 0, 0, 0, 0],
                        [1, 0, 1, 0, 1, 0, 1],
                        [0, 0, 0, 0, 0, 0, 0],
                        [1, 0, 1, 0, 1, 0, 1],
                        [0, 0, 0, 0, 0, 0, 0],
                        [1, 0, 1, 0, 1, 0, 1],
                    ],
                    labels: ["black", "white"],
                }, // Sixteen
                {
                    name: "Bishop",
                    layout: [
                        [0, 1, 0, 1, 0, 1, 0],
                        [1, 0, 1, 0, 1, 0, 1],
                        [0, 1, 0, 1, 0, 1, 0],
                        [1, 0, 1, 1, 1, 0, 1],
                        [0, 1, 0, 1, 0, 1, 0],
                        [1, 0, 1, 0, 1, 0, 1],
                        [0, 1, 0, 1, 0, 1, 0],
                    ],
                    labels: ["black", "white"],
                }, // Chess
            ],
        }, // Dots
        {
            name: "Lines",
            levels: [
                {
                    name: "One",
                    layout: [
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                    ],
                    labels: ["black", "white"],
                }, // One
                {
                    name: "Two",
                    layout: [
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                    ],
                    labels: ["black", "white"],
                }, // Two
                {
                    name: "Three",
                    layout: [
                        [0, 1, 0, 1, 0, 1, 0],
                        [0, 1, 0, 1, 0, 1, 0],
                        [0, 1, 0, 1, 0, 1, 0],
                        [0, 1, 0, 1, 0, 1, 0],
                        [0, 1, 0, 1, 0, 1, 0],
                        [0, 1, 0, 1, 0, 1, 0],
                        [0, 1, 0, 1, 0, 1, 0],
                    ],
                    labels: ["black", "white"],
                }, // Three
                {
                    name: "Four",
                    layout: [
                        [1, 0, 1, 0, 1, 0, 1],
                        [1, 0, 1, 0, 1, 0, 1],
                        [1, 0, 1, 0, 1, 0, 1],
                        [1, 0, 1, 0, 1, 0, 1],
                        [1, 0, 1, 0, 1, 0, 1],
                        [1, 0, 1, 0, 1, 0, 1],
                        [1, 0, 1, 0, 1, 0, 1],
                    ],
                    labels: ["black", "white"],
                }, // Four
                {
                    name: "Sixteen",
                    layout: [
                        [1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 1, 0, 1, 0, 1],
                        [1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 1, 0, 1, 0, 1],
                        [1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 1, 0, 1, 0, 1],
                        [1, 1, 1, 1, 1, 1, 1],
                    ],
                    labels: ["black", "white"],
                }, // Sixteen
            ],
        }, // Lines
        {
            name: "Boxes",
            levels: [
                {
                    name: "One",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["black", "white"],
                }, // One
                {
                    name: "Two",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["black", "white"],
                }, // Two
                {
                    name: "Three",
                    layout: [
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                        [0, 0, 1, 0, 1, 0 , 0],
                        [0, 0, 1, 1, 1, 0 , 0],
                    ],
                    labels: ["black", "white"],
                }, // Three
                {
                    name: "Four",
                    layout: [
                        [0, 0, 0, 0, 0, 0 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 1, 0, 1, 0, 1 , 0],
                        [0, 1, 1, 1, 1, 1 , 0],
                        [0, 0, 0, 0, 0, 0 , 0],
                    ],
                    labels: ["black", "white"],
                }, // Four
                {
                    name: "Inside",
                    layout: [
                        [1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 1, 1, 1, 0, 1],
                        [1, 0, 1, 0, 1, 0, 1],
                        [1, 0, 1, 1, 1, 0, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 1, 1, 1, 1, 1, 1],
                    ],
                    labels: ["black", "white"],
                }, // Inside
            ],
        }, // Boxes
        {
            name: "Flags",
            levels: [
                {
                    name: "France",
                    layout: [
                        [0, 0, 0, 1, 1, 1, 2, 2, 2],
                        [0, 0, 0, 1, 1, 1, 2, 2, 2],
                        [0, 0, 0, 1, 1, 1, 2, 2, 2],
                        [0, 0, 0, 1, 1, 1, 2, 2, 2],
                        [0, 0, 0, 1, 1, 1, 2, 2, 2],
                        [0, 0, 0, 1, 1, 1, 2, 2, 2],
                        [0, 0, 0, 1, 1, 1, 2, 2, 2],
                    ],
                    labels: ["blue", "white", "red"],
                }, // France
                {
                    name: "Iceland",
                    layout: [
                        [0, 0, 1, 2, 1, 0, 0, 0, 0],
                        [0, 0, 1, 2, 1, 0, 0, 0, 0],
                        [1, 1, 1, 2, 1, 1, 1, 1, 1],
                        [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        [1, 1, 1, 2, 1, 1, 1, 1, 1],
                        [0, 0, 1, 2, 1, 0, 0, 0, 0],
                        [0, 0, 1, 2, 1, 0, 0, 0, 0],
                    ],
                    labels: ["blue", "white", "red"],
                }, // Iceland
                {
                    name: "Canada",
                    layout: [
                        [1, 1, 0, 0, 0, 0, 0, 1, 1],
                        [1, 1, 0, 0, 0, 0, 0, 1, 1],
                        [1, 1, 0, 1, 1, 1, 0, 1, 1],
                        [1, 1, 0, 1, 1, 1, 0, 1, 1],
                        [1, 1, 0, 1, 1, 1, 0, 1, 1],
                        [1, 1, 0, 0, 1, 0, 0, 1, 1],
                        [1, 1, 0, 0, 0, 0, 0, 1, 1],
                    ],
                    labels: ["red", "white"],
                }, // Canada
                {
                    name: "Thailand",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    ],
                    labels: ["red", "white", "blue"],
                }, // Thailand
                {
                    name: "Argentina",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 2, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    ],
                    labels: ["blue", "white", "yellow"],
                }, // Argentina
            ],
        }, // Flags
        {
            name: "Art",
            levels: [
                {
                    name: "Recticle",
                    layout: [
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [1, 1, 1, 0, 1, 1, 1],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                    ],
                    labels: ["black", "white"],
                }, // Recticle
                {
                    name: "Rainbow",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0],
                        [1, 1, 1, 1, 1, 1, 1],
                        [2, 2, 2, 2, 2, 2, 2],
                        [3, 3, 3, 3, 3, 3, 3],
                        [4, 4, 4, 4, 4, 4, 4],
                        [5, 5, 5, 5, 5, 5, 5],
                        [6, 6, 6, 6, 6, 6, 6],
                    ],
                    labels: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
                }, // Rainbow
                {
                    name: "Apple",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 3, 2, 0, 0],
                        [0, 0, 0, 3, 0, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                    ],
                    labels: ["white", "red", "green", "black"],
                }, // Apple
                {
                    name: "Pac-Man",
                    layout: [
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 1, 2, 2, 2, 1, 0],
                        [1, 2, 2, 2, 1, 0, 0],
                        [1, 2, 2, 1, 0, 0, 0],
                        [1, 2, 2, 2, 1, 0, 0],
                        [0, 1, 2, 2, 2, 1, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                    ],
                    labels: ["white", "black", "yellow"],
                }, // Pac-Man
                {
                    name: "Pi",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0],
                        [1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 0, 0, 0, 0, 0],
                        [1, 0, 1, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0],
                        [0, 1, 1, 0, 1, 1, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                    ],
                    labels: ["black", "white"],
                }, // ???
            ],
        }, // Art
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
            select: 1000,
            fadein: 500,
        },
        options: acts,
        options_board: act_board,
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
            select: 1000,
            fadein: 500,
        },
        options: levels,
        options_board: level_board,
    };
    return config;
}
function get_game_config({act_idx, level_idx}) {
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
                        tint: 0xaaaaaa,
                    },
                    "white": {
                        scale: 1.05,
                        tint: 0xffffff,
                    },
                    "black": {
                        scale: 1.05,
                        tint: 0x303030,
                    },
                    "cursor": {
                        scale: 1.1,
                        tint: 0xcccc00,
                    },
                    "red": {
                        scale: 1.05,
                        tint: 0xff0000,
                    },
                    "orange": {
                        scale: 1.05,
                        tint: 0xffaa00,
                    },
                    "yellow": {
                        scale: 1.1,
                        tint: 0xffff00,
                    },
                    "green": {
                        scale: 1.05,
                        tint: 0x00ff00,
                    },
                    "blue": {
                        scale: 1.05,
                        tint: 0x0000ff,
                    },
                    "indigo": {
                        scale: 1.05,
                        tint: 0xaa00ff,
                    },
                    "violet": {
                        scale: 1.05,
                        tint: 0xff00ff,
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
            depth: 0,//tile_board.tile.depth+1,
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
                    "black": {
                        scale: 1.0,
                        tint: 0x404040,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: 0xffff88,
                    },
                    "red": {
                        scale: 1.0,
                        tint: 0xff0000,
                    },
                    "orange": {
                        scale: 1.0,
                        tint: 0xffaa00,
                    },
                    "yellow": {
                        scale: 1.0,
                        tint: 0xffff00,
                    },
                    "green": {
                        scale: 1.0,
                        tint: 0x00ff00,
                    },
                    "blue": {
                        scale: 1.0,
                        tint: 0x0000ff,
                    },
                    "indigo": {
                        scale: 1.0,
                        tint: 0xaa00ff,
                    },
                    "violet": {
                        scale: 1.0,
                        tint: 0xff00ff,
                    },
                },
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
            select: 500,
        },
        tile_board: tile_board,
        ball_board: ball_board,
    };
    return config;
}

function get_default_keybindings() {
    const keybindings = {
        step_left: 65,   // A
        step_right: 68,  // D
        step_up: 87,     // W
        step_down: 83,   // S
        twist_left: 81,  // Q
        twist_right: 69, // E
        accept: 32,      // SPACE
        escape: 27,      // ESC
        preview: 82      // R
    };
    return keybindings;
}

class BaseScene extends Phaser.Scene {
    init({config, metatext, on_release, context, fadein_delay, metatext_depth}) {
        if (fadein_delay == undefined) {
            fadein_delay = 0;
        }
        if (metatext_depth == undefined) {
            metatext_depth = 2;
        }
        
        this.init_args = {config, metatext, on_release, context, fadein_delay, metatext_depth};
        //console.log(context);
    }
    create() {                
        this.config = this.init_args.config;
        const config = this.config;
        // Remove any old keys -------------------------------------------------
        this.input.keyboard.keys.forEach((key) => {
            if (key == undefined) {return;}
            this.input.keyboard.removeKey(key.keyCode);
        });
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
            ease: "Quint.InOut",
            duration: config.time.fadein + this.init_args.fadein_delay,
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
        ).setOrigin(0.5).setDepth(this.init_args.metatext_depth);

        this.on_release = () => {
            if (!this.init_args.on_release) {return;}
            const screen_cover = new ScreenCover({
                x: config.window.width*0.5,
                y: config.window.height*0.5,
                scene: this,
            }).setDepth(1);
            screen_cover.setTint(config.window.color);
            screen_cover.setAlpha(0.0);
            screen_cover.tween({
                targets: screen_cover,
                alpha: 1.0,
                ease: "Quint.InOut",
                duration: config.time.fadein,
                onComplete: ()  => {
                    this.init_args.on_release(this);
                },
            });
        };
        this.input.keyboard.on("keydown_ESC", (e) => {
            this.on_release();
        });
    }
}
class OptionScene extends BaseScene {
    init({config, metatext, on_release, context, option_idx, fadein_delay, metatext_depth}) {
        super.init({config, metatext, on_release, context, fadein_delay, metatext_depth});        
        this.init_args.option_idx = option_idx;
        //console.log(context);
        // parent_option_idx
    }
    create() {
        super.create();
        const config = this.config;
        const metatext = this.metatext;      
        // Make options board --------------------------------------------------
        this.options_board = new Board({
            scene: this,
            x: config.window.width*0.4, // TODO: Hardcoded values
            y: config.window.height*0.5,
            config: config.options_board,
        });
        const options_board = this.options_board;
        // Events --------------------------------------------------------------
        let hover_idx = this.init_args.option_idx || 0;
        const event_emitter = new Phaser.Events.EventEmitter();
        const bindings = this.init_args.context.keybindings;        
        this.input.keyboard.addKey(bindings.step_up).on("down", () => {
            hover_idx = (hover_idx - 1 + options_board.config.nrows) % options_board.config.nrows;
            event_emitter.emit("change_hover");
        });
        this.input.keyboard.addKey(bindings.step_down).on("down", () => {
            hover_idx = (hover_idx + 1 + options_board.config.nrows) % options_board.config.nrows;
            event_emitter.emit("change_hover");
        });
        this.input.keyboard.addKey(bindings.step_right).on("down", () => {
            event_emitter.emit("select_option");
        });
        this.input.keyboard.addKey(bindings.step_left).on("down", () => {
            this.on_release();
        });

        // Test ----------------------------------------------------------------
        //let key = this.input.keyboard.addKey(76);
        //key.on("down", function () {
        //    console.log(76);
        //});
        // ---------------------------------------------------------------------
        
        // Setup options board -------------------------------------------------
        options_board.foreach((row, col) => {
            // Get option data .................................................
            const option_idx = options_board.config.ncols*row + col;
            const tile = options_board.tiles[row][col];            
            // Manipulate option data ..........................................
            tile.setInteractive();
            new VisState(config.options_board.tile.state).inject({
                sprite: tile,
                state: "default",
            });
            let option_selected = false;
            // Make text .......................................................
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
            // Get text data ...................................................
            const original_option_idx_text_scale = option_idx_text.scale;            
            // Hover highlighting ..............................................
            event_emitter.on("change_hover", () => {
                if (option_selected) return;
                if (option_idx == hover_idx) {
                    //console.log(tile.scene, this)  // EYE, TODO, WTF????                   
                    tile.state.set("hover");
                }
                else {
                    tile.state.set("default");
                }
            });
            event_emitter.emit("change_hover"); // This happens only once (per tile)
            event_emitter.on("select_option", () => {
                if (option_idx == hover_idx) {on_pointerup();}                
            });
            // Camera goto prev_option .........................................
            const camera = this.cameras.main;
            if (option_idx == this.init_args.option_idx) {
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
                    ease: "Quint.OutIn",
                    duration: config.time.select*0.5,
                    onComplete: () => {
                        option_selected = false;
                        option_name_text.setDepth(0);                        
                    },
                });
                this.tweens.add({
                    targets: camera,
                    scrollX: 0,
                    scrollY: 0,
                    duration: config.time.select,
                    ease: "Quint.InOut",
                });
            }
            // Events ..........................................................
            const on_pointerup = () => {
                if (option_selected) return;
                option_selected = true;

                // Reset state .................................................
                tile.state.set("default");
                metatext.setDepth(0);
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
                    ease: "Quint.InOut", // TODO: Out?
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
                    ease: "Quint.InOut",
                });
                // Tween option text scale .....................................
                this.tweens.add({
                    targets: option_name_text,
                    scale: metatext.scale, // TODO: fix this hardcoding
                    ease: "Quint.InOut",
                    duration: config.time.select,
                    onComplete: () => {
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
                hover_idx = option_idx;
                event_emitter.emit("change_hover");
            });
            //tile.on("pointerout", () => {
            //    if (option_selected) return;
            //    tile.state.set("default");
            //});
            tile.on("pointerup", () => {
                on_pointerup();
            });
            const original_act_idx_text_scale = option_idx_text.scale;

            tile.event_emitter.on("preUpdate", (time, delta) => {
                option_idx_text.scale = tile.scale*original_option_idx_text_scale*3; // TODO: Hardcoded number 3?
                option_name_text.setTint(tile.current_tint);

                if (option_selected) {return;} // TODO: Is this needed?
                option_name_text.scale = tile.scale*original_option_idx_text_scale*3;
            });
            // .................................................................
        });
    }
}

class LoadingScene extends Phaser.Scene {
    constructor() {
        super({ key: "LoadingScene" });
    }
    preload() {
        //this.show_loading();

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
                font: "bold 50px BaseFont",
                fill: "#ffffff",
            }
        ).setOrigin(0.5);
    }
    create() {
        this.scene.stop("LoadingScene");
        this.scene.start("IntroScene");
        //this.scene.start("MenuScene", {
        //    config: get_menu_config(),
        //    metatext: "Menu",
        //    context: {
        //       keybindings: get_default_keybindings(),
        //   },
        //});
    }
}
class IntroScene extends Phaser.Scene {
    constructor() {
        super({ key: "IntroScene" });
    }
    create() {
        const config = get_act_config();
        
        const isomorpheus_text = this.add.text(
            0.5*config.window.width,
            0.45*config.window.height,
            "Isomorpheus",
            {
                font: "bold 70px BaseFont",
                fill: "#ffffff",
            }
        ).setOrigin(0.5);

        const presents_text = this.add.text(
            0.5*config.window.width,
            0.55*config.window.height,
            "presents",
            {
                font: "bold 70px BaseFont",
                fill: "#ffffff",
            }
        ).setOrigin(0.5);

        const title_text = this.add.text(            
            0.5*config.window.width,
            0.5*config.window.height,
            "BALL TWISTER",
            {
                font: "bold 100px BaseFont",
                fill: "#ffffff",
            }
        ).setOrigin(0.5).setAlpha(0.0);        

        const release_scene = () => {
            this.scene.stop("IntroScene");
            this.scene.start("MenuScene", {
                config: get_menu_config(),
                metatext: "Menu",
                context: {
                    keybindings: get_default_keybindings(),
                },
                fadein_delay: 1000,
                metatext_depth: 0,
            });
        };
        
        this.tweens.add({
            targets: [isomorpheus_text, presents_text],
            alpha: {from: 0, to: 1},
            ease: "Quint.InOut",
            duration: 2000,
            onComplete: () => {
                this.tweens.add({
                    targets: [isomorpheus_text, presents_text],
                    alpha: {from: 1, to: 0},
                    ease: "Quint.InOut",
                    duration: 2000,
                    onComplete: () => {
                        this.tweens.add({
                            targets: title_text,
                            alpha: {from: 0, to: 1},
                            ease: "Quint.InOut",
                            duration: 2000,
                            onComplete: () => {
                                this.tweens.add({
                                    targets: title_text,
                                    alpha: {from: 1, to: 0},
                                    ease: "Quint.InOut",
                                    duration: 2000,
                                    onComplete: () => {
                                        release_scene();
                                    },
                                });
                            },
                        });
                    },
                });
            },
        });

        this.input.keyboard.on("keydown", () => {
            release_scene();
        });
    }
}
class MenuScene extends OptionScene {
    constructor() {
        super({ key: "MenuScene" });
    }
    change_scene({option_idx, metatext}) {
        const on_release = (scene) => {
            scene.scene.start("MenuScene", {
                config: this.config,
                metatext: "Menu",
                option_idx: option_idx,
                context: this.init_args.context, // TODO: Get context fro child? Now child manipulates "global" context.
            });
        };
        const switch_to = ({scene_name, scene_config}) => {
            this.scene.stop("MenuScene");
            this.scene.start(scene_name, {
                config: scene_config,
                metatext: metatext,
                on_release: on_release,
                context: this.init_args.context,
            });
        };
        if (metatext == "Levels") {
            switch_to({
                scene_name: "ActScene",
                scene_config: get_act_config(),
            });
        }
        else if (metatext == "Controls") {
            switch_to({
                scene_name: "ControlsScene",
                scene_config: get_controls_config(),
            });
        }
        else if (metatext == "Editor") {
            switch_to({
                scene_name: "EditorScene",
                scene_config: get_editor_config(),
            });
        }
        else {
            console.log("WOOPS")
        }
    }
}
class ControlsScene extends OptionScene {
    constructor() {
        super({ key: "ControlsScene" });
    }
    change_scene({option_idx, metatext}) {
        this.init_args.context.control_idx = option_idx;
        this.scene.stop("ControlsScene");
        this.scene.start("SetControlsScene", {
            config: this.init_args.config,//get_setcontrols_config(),
            metatext: metatext,
            on_release: (scene) => {
                scene.scene.step("SetControlsScene");
                scene.scene.start("ControlsScene", {
                    config: this.config,
                    metatext: this.metatext.text,
                    option_idx: option_idx,
                    on_release: this.init_args.on_release,
                    context: this.init_args.context,
                });
            },
            context: this.init_args.context,
        });
    }
    create() {
        super.create();
        const config = this.config;
        const metatext = this.metatext;

        const key_map = get_key_map();
        this.options_board.foreach((row, col) => {
            const tile = this.options_board.tiles[row][col];
            const key = config.options[row].key;
            const key_code = this.init_args.context.keybindings[key];
            const key_name = key_map[key_code];
            //console.log(key_name);

            const key_name_text = this.add.text(
                tile.x + 6*tile.config.width,
                tile.y,
                "[" + key_name + "]",
                {
                    font: "bold 70px BaseFont", // TODO: Hardcoded values, move to config
                    fill: "#ffffff",
                }
            ).setOrigin(0.0, 0.5);

            const original_key_name_text_scale = key_name_text.scale;
            tile.event_emitter.on("preUpdate", (time, delta) => { // TODO: Duplication from OptionScene
                key_name_text.setTint(tile.current_tint);               
                key_name_text.scale = tile.scale*original_key_name_text_scale*3;
            });
        });
    }
}
class SetControlsScene extends BaseScene {
    constructor() {
        super({ key: "SetControlsScene" });
    }
    create() {
        super.create();
        const config = this.config;
        const metatext = this.metatext;
        // Colon ---------------------------------------------------------------
        const press_text = this.add.text(
            metatext.x,
            metatext.y,
            metatext.text,
            {
                font: "bold 70px BaseFont", // TODO: Hardcoded values, move to config
                fill: "#ffffff",
            }
        ).setOrigin(0.5).setDepth(0);
        const x = press_text.x;
        press_text.setOrigin(0.0, 0.5);
        press_text.x = x - press_text.width*0.5;
        press_text.setText(press_text.text + ":");
        // Press key text ------------------------------------------------------
        this.add.text(
            0.5*config.window.width,
            0.5*config.window.height,
            "[Press key]",
            {
                font: "bold 50px BaseFont",
                fill: "#ffffff",
            }
        ).setOrigin(0.5);
        // Events --------------------------------------------------------------
        this.input.keyboard.on("keydown", (e) => {
            const control_idx = this.init_args.context.control_idx;
            const control_key = config.options[control_idx].key;
            this.init_args.context.keybindings[control_key] = e.keyCode,
            this.on_release();

            //let key = event.key;//.toUpperCase();
            //if (key == " ") {key = "Space"};
            console.log("Code: " + e.keyCode);
            //console.log("Key: " + key);
            //console.log(control_key);
            //console.log(this.init_args.context.keybindings);
        });
    }
}
class EditorScene extends BaseScene {
    constructor() {
        super({ key: "EditorScene" });
    }
    change_scene({option_idx, metatext}) {
        console.log("Editor");
    }
    create() {
        super.create();
        const config = this.config;
        const metatext = this.metatext;
        // ---------------------------------------------------------------------
    }
}
class ActScene extends OptionScene {
    constructor() {
        super({ key: "ActScene" });
    }
    change_scene({option_idx, metatext}) {
        this.init_args.context.act_idx = option_idx;
        this.scene.stop("ActScene");
        this.scene.start("LevelScene", {
            config: get_level_config({act_idx:option_idx}),
            metatext: metatext,
            on_release: (scene) => {
                scene.scene.stop("LevelScene");
                scene.scene.start("ActScene", {
                    config: this.config,
                    metatext: "Levels",
                    option_idx: option_idx,
                    on_release: this.init_args.on_release,
                    context: this.init_args.context,
                });
            },
            context: this.init_args.context,
        });
    }
}
class LevelScene extends OptionScene {
    constructor() {
        super({ key: "LevelScene" });
    }
    change_scene({option_idx, metatext}) {
        this.init_args.context.level_idx = option_idx;
        this.scene.stop("LevelScene");
        this.scene.start("GameScene", {
            config: get_game_config({
                act_idx: this.init_args.context.act_idx,
                level_idx: this.init_args.context.level_idx,
            }),
            metatext: metatext,
            on_release: (scene) => {
                scene.scene.stop("GameScene");
                scene.scene.start("LevelScene", {
                    metatext: this.metatext.text,
                    config: get_level_config({act_idx: this.init_args.context.act_idx}), // EYE
                    option_idx: option_idx,
                    on_release: this.init_args.on_release,
                    context: this.init_args.context,                    
                });
            },
            context: this.init_args.context,
            //fadein_delay: 1000, // TODO: Does not do anything for some reason
        });
    }
}
class GameScene extends BaseScene {
    constructor() {
        super({ key: "GameScene" });
    }
    create() {
        super.create();
        const config = this.config;
        const metatext = this.metatext;        
        // Cursor --------------------------------------------------------------
        let cursor = {
            row: Math.floor(config.tile_board.nrows*0.5),
            col: Math.floor(config.tile_board.ncols*0.5),
        };
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
        // Screen cover and board animation ------------------------------------
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
            ease: "Quint.InOut",
            duration: 400,
            onComplete: () => {
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
                }); // TODO: Also used in victory and keydown_R, unify...
                tile_board.foreach((row, col) => {
                    const tile = tile_board.tiles[row][col];
                    tile.setInteractive();
                    tile.state.set(correct_state[row][col]);
                    this.time.addEvent({
                        delay: 600,
                        callback: () => {
                            tile.state.set("default");
                        },
                    });
                    tile.on("pointerover", () => {
                        on_step({row: row - cursor.row, col: col - cursor.col});
                    });
                });
            }, // Animate boards
        });        
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
        const exit_game = () => {
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
                ease: "Quint.InOut", // TODO: Out?
                duration: config.time.select,
                onComplete: () => {
                    this.init_args.on_release(this);
                },
            });
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
                delay: 2000,
                callback: () => {
                    exit_game();
                },
            });
        };

        const bindings = this.init_args.context.keybindings;
        this.input.keyboard.addKey(bindings.twist_right).on("down", () => {
            on_twist(false);
        });
        this.input.keyboard.addKey(bindings.twist_left).on("down", () => {
            on_twist(true);
        });
        this.input.keyboard.addKey(bindings.step_up).on("down", () => {
            on_step({row:-1, col:0});
        });
        this.input.keyboard.addKey(bindings.step_down).on("down", () => {
            on_step({row:1, col:0});
        });
        this.input.keyboard.addKey(bindings.step_left).on("down", () => {
            on_step({row:0, col:-1});
        });
        this.input.keyboard.addKey(bindings.step_right).on("down", () => {
            on_step({row:0, col:1});
        });

        this.input.keyboard.addKey(bindings.preview).on("down", () => {
            viewing_correct = true;
            tile_board.foreach((row, col) => {
                tile_board.tiles[row][col].state.set(correct_state[row][col]);
            });
        });
        this.input.keyboard.addKey(bindings.preview).on("up", () => {
            viewing_correct = false;
            tile_board.foreach((row, col) => {
                tile_board.tiles[row][col].state.set("default");
            });
            if (playing) {
                tile_board.tiles[cursor.row][cursor.col].state.set("cursor");
            }
        });

        this.input.keyboard.addKey(bindings.accept).on("down", () => {
            if (playing) {return;}
            if (shuffling) {return;}

            shuffling = true;

            const shuffle_steps =  ball_board.config.nrows*ball_board.config.ncols; // 5;
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

        this.input.keyboard.on("keyup_ESC", () => {
            exit_game();
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
        //console.log(this.sprite.scene)
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
        //let config = get_game_config(); ??
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
function get_key_map() {
    const key_codes = {
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause/Break",
        20: "Caps Lock",
        27: "Escape",
        32: "Space",
        33: "Page Up",
        34: "Page Down",
        35: "End",
        36: "Home",
        37: "Left Arrow",
        38: "Up Arrow",
        39: "Right Arrow",
        40: "Down Arrow",
        45: "Insert",
        46: "Delete",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
        91: "Windows Key / Left ⌘ / Chromebook Search key",
        92: "Right Window Key",
        93: "Windows Menu / Right ⌘",
        96: "Numpad 0",
        97: "Numpad 1",
        98: "Numpad 2",
        99: "Numpad 3",
        100: "Numpad 4",
        101: "Numpad 5",
        102: "Numpad 6",
        103: "Numpad 7",
        104: "Numpad 8",
        105: "Numpad 9",
        106: "Multiply",
        107: "Add",
        109: "Subtract",
        110: "Decimal Point",
        111: "Divide",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "Num Lock",
        145: "Scroll Lock",
        186: "Semi-Colon",
        187: "Equal Sign",
        188: "Comma",
        189: "Dash",
        190: "Period",
        191: "Forward Slash",
        192: "Grave Accent",
        219: "Open Bracket",
        220: "Back Slash",
        221: "Close Braket",
        222: "Single Quote"
    };
    return key_codes;
}
// Run /////////////////////////////////////////////////////////////////////////
const GLOBAL_CONFIG = get_menu_config();
var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: GLOBAL_CONFIG.window.width,
    height: GLOBAL_CONFIG.window.height,
    backgroundColor: GLOBAL_CONFIG.window.color,
    scene: [LoadingScene, IntroScene,
            MenuScene,
            ControlsScene, SetControlsScene, EditorScene, ActScene,
            LevelScene, GameScene],
});
