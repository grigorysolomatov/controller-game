// Notes ///////////////////////////////////////////////////////////////////////
const notes = {
    // * "pointerup" fires on sprite level before global level
    // * Use space for background image?
    // * Change stop to shield
    // * Add shield as resource
    // * When an enemy "stops", he can activate other abilities than just "stop"
    // * Make ability that enables jumping to anywhere on the controller board?
    // * Will need a new object corresponding to user state, i.e. user.completed_levels.
    // * Make abilities that can displace enemies, e.g. rotate parts of board.
    // * Make lava tiles?
    // * Some levels will block a subset of the controller board
}
// Config //////////////////////////////////////////////////////////////////////
function get_config() {
    let colors = {
        window: 0x203030,
        game_board: 0x404040,
        controller_grid: {
            disabled: 0x406040,
            enabled: 0x60a060,
            hover: 0x80ff80,
        },
        build_grid: {
            locked: 0x303930,
            disabled: 0x406040,
            enabled: 0x60a060,
            hover: 0x80ff80,
        },
        level_grid: {
            disabled: 0x000000,
            enabled: 0xff00ff,
            hover: 0xffff00,
        },
        shop_board: {
            disabled: 0x404060,
            enabled: 0x6060a0,
            hover: 0x8080ff,
        },
        controller: 0x40ff40,
        player: 0x40ff40,
        command: {
            disabled: 0x000000,
            enabled: 0x000000,
            hover: 0xffffff,
        },
        command_drag: 0xa0ffff,
        turn_button: {
            disabled: 0x606020,
            enabled: 0xffff60,
            hover: 0xff4020,
        },
        build_button: {
            disabled: 0x6060ff,
            enabled: 0xffff60,
            hover: 0xff4020,
        },
        resources: {
            energy: "#4040ff",
            ultimate: "#a040ff",
            health: "#a03020",
            kills: "#000000",
            health_hurt: 0x600000,
        },
        enemies: {
            basic: 0xff4020,
            fast: 0x4020ff,
            slow: 0xff40ff,
        },
        stop_sign: 0xff0000,
    };
    let shared = {
        window: {
            width: 1750,
            height: 1000,
            color: colors.window,
        },
        commands: {
            state_map: {
                "disabled": {
                    scale: 1,
                    tint: colors.command.disabled,
                },
                "enabled": {
                    scale: 1,
                    tint: colors.command.enabled,
                },
                "hover": {
                    scale: 1.1,
                    tint: colors.command.hover,
                },
            },
            depth: 10,
            width: 60,
            time: {
                scale: 500,
                tint: 200,
            },
        },
        command_drags: {
            depth: 100,
            width: 80,
            tint: colors.command_drag,
            time: {
                scale: 500,
                fade: 500,
            },
        },
        enemies: {
            health: {
                banner: {
                    color: colors.resources.health,
                    font_size: 15,
                    depth: 10,
                    lift: 40,
                },
            },
        },
    };
    let config = {
        window: shared.window,
        game_board: {
            nrows: 8,
            ncols: 5,
            step: 105,
            tile: {
                img: "tile",
                width: 100,
                state_map: {
                    "disabled": {
                        scale: 1,
                        tint: colors.game_board,
                    },
                    "enabled": {
                        scale: 1,
                        tint: 0x404040,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: 0x808080,
                    },
                },
                init_state: "disabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
        },
        controller_board: {
            nrows: 5,
            ncols: 5,
            step:  105,
            tile: {
                img: "tile",
                width: 100,
                state_map: {
                    "disabled": {
                        scale: 1,
                        tint: colors.controller_grid.disabled,
                    },
                    "enabled": {
                        scale: 1,
                        tint: colors.controller_grid.enabled,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: colors.controller_grid.hover,
                    },
                },
                init_state: "disabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
        },
        shop_board: {
            nrows: 2,
            ncols: 6,
            step:  105,
            tile: {
                img: "tile",
                width: 100,
                state_map: {
                    "disabled": {
                        scale: 1,
                        tint: colors.shop_board.disabled,
                    },
                    "enabled": {
                        scale: 1,
                        tint: colors.shop_board.enabled,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: colors.shop_board.hover,
                    },
                },
                init_state: "disabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
            x: shared.window.width*0.5,
            y: shared.window.height*0.8,
        },
        build_board: {
            nrows: 5, // TODO: Get from shared config
            ncols: 5,
            step:  105,
            x: shared.window.width*0.5,
            y: shared.window.height*0.3,
            tile: {
                img: "tile",
                width: 100,
                state_map: {
                    "locked": {
                        scale: 1,
                        tint: colors.build_grid.locked,
                    },
                    "disabled": {
                        scale: 1,
                        tint: colors.build_grid.disabled,
                    },                    
                    "enabled": {
                        scale: 1,
                        tint: colors.build_grid.enabled,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: colors.build_grid.hover,
                    },
                },
                init_state: "disabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
        },
        level_board: {
            nrows: 1, // TODO: Get from shared config
            ncols: 3,
            step:  105,
            tile: {
                img: "level_tile",
                width: 100,
                state_map: {
                    "disabled": {
                        scale: 1,
                        tint: colors.level_grid.disabled,
                    },
                    "enabled": {
                        scale: 1,
                        tint: colors.level_grid.enabled,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: colors.level_grid.hover,
                    },
                },
                init_state: "enabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
        },
        controller: {
            img: "controller",
            width: 80,
            tint: colors.controller,
            time: {
                move: 500,
                fade: 1000,
            },
            hover: {
                alpha: 0.1,
                delay: 500,
            },
            depth: 100,
        },
        player: {
            img: "player",
            width: 80,
            tint: colors.player,
            health: {
                values: {
                    start: 3,
                    max: 3,
                },
                banner: {
                    font_size: 15,                    
                    color: colors.resources.health,
                    lift: 40,                    
                    depth: 10,
                },
                display: {
                    x: shared.window.width*0.5,
                    y: shared.window.height*0.25,
                    font_size: 25,
                    color: colors.resources.health,
                    depth: 10,
                },
                screen_cover: {
                    color: colors.resources.health_hurt,
                    time: 200,
                },
            },
            energy: {
                values: {
                    start: 4,
                    max: 4,
                },
                display: {
                    x: shared.window.width*0.5,
                    y: shared.window.height*0.3,
                    font_size: 25,
                    color: colors.resources.energy,
                    depth: 10,
                },
            },
            ultimate: {
                values: {
                    start: 0,
                    max: 20,
                },
                display: {
                    x: shared.window.width*0.5,
                    y: shared.window.height*0.35,
                    font_size: 25,
                    color: colors.resources.ultimate,
                    depth: 10,
                },
            },
            kills: {
                display: {
                    x: shared.window.width*0.5,
                    y: shared.window.height*0.40,
                    font_size: 25,
                    color: colors.resources.kills,
                    depth: 10,
                },
            },
            time: {
                move: 500,
                fade: 1000,
                wobble: 100,
            },
            depth: 10,
        },
        enemies: {
            basic: {
                img: "enemy",
                width: 80,
                tint: colors.enemies.basic,                
                health: {
                    start_value: 2,
                    max_value: 2,
                    banner: shared.enemies.health.banner,
                },
                time: {
                    move: 500,
                    fade: 1000,
                    wobble: 100,
                },
                depth: 10,
            },
            fast: {
                img: "enemy",
                width: 80,
                tint: colors.enemies.fast,                
                health: {
                    start_value: 1,
                    max_value: 1,
                    banner: shared.enemies.health.banner,
                },
                time: {
                    move: 500,
                    fade: 1000,
                    wobble: 100,
                },
                depth: 10,
            },
            slow: {
                img: "enemy",
                width: 80,
                tint: colors.enemies.slow,                
                health: {
                    start_value: 4,
                    max_value: 4,
                    banner: shared.enemies.health.banner,
                },
                time: {
                    move: 500,
                    fade: 1000,
                    wobble: 100,
                },
                depth: 10,
            },
        },
        wall: {
            img: "wall",
            width: 80,
            tint: 0x202020,
        },
        commands: {
            "step_forward": {
                img: "step_forward",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
                time: shared.commands.time,
            },
            "step_backward": {
                img: "step_backward",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
                time: shared.commands.time,
            },
            "step_right": {
                img: "step_right",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
                time: shared.commands.time,
            },
            "step_left": {
                img: "step_left",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
              time: shared.commands.time,
            },
            "turn_left": {
                img: "turn_left",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
              time: shared.commands.time,
            },
            "turn_right": {
                img: "turn_right",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
              time: shared.commands.time,
            },
            "hit_forward": {
                img: "hit_forward",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
              time: shared.commands.time,
            },
            "explode_self": {
                img: "explode_self",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
                time: shared.commands.time,
            },
            "dash_forward": {
                img: "dash_forward",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
                time: shared.commands.time,
            },
        },
        command_drags: {
            "step_forward": {
                img: "step_forward_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "step_backward": {
                img: "step_backward_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "step_right": {
                img: "step_right_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "step_left": {
                img: "step_left_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "turn_left": {
                img: "turn_left_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "turn_right": {
                img: "turn_right_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "hit_forward": {
                img: "hit_forward_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "explode_self": {
                img: "explode_self_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "dash_forward": {
                img: "dash_forward_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
        },
        turn_button: {
            img: "turn_button",
            width: 161,
            state_map: {
                    "disabled": {
                        scale: 1,
                        tint: colors.turn_button.disabled,
                    },
                    "enabled": {
                        scale: 1,
                        tint: colors.turn_button.enabled,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: colors.turn_button.hover,
                    },
                },
            init_state: "enabled",
            time: {
                scale: 500,
                tint: 200,
            },
            x: shared.window.width*0.5,
            y: shared.window.height*0.15,
        },
        build_button: {
            img: "build_button",
            width: 161,
            state_map: {
                    "disabled": {
                        scale: 1,
                        tint: colors.build_button.disabled,
                    },
                    "enabled": {
                        scale: 1,
                        tint: colors.build_button.enabled,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: colors.build_button.hover,
                    },
                },
            init_state: "enabled",
            time: {
                scale: 500,
                tint: 200,
            },
            x: shared.window.width*0.8,
            y: shared.window.height*0.8,
        },
        stop_sign: {
            img: "stop_sign",
            width: 50,
            tint: colors.stop_sign,
            depth: 1000,
            time: {
                fade: 500,
            },
        },
    };
    return config
}
// User state //////////////////////////////////////////////////////////////////
class User {
    // TODO: Not used for anything yet
    constructor({name}) {
        this.name = name;
        this.selected_level = null;
    }
}
// Helper functions ////////////////////////////////////////////////////////////
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
// Main ////////////////////////////////////////////////////////////////////////
class LoadingScene extends Phaser.Scene {
    constructor() {
        super({ key: "LoadingScene" });
    }
    preload() {
        this.show_loading();
        
        this.load.image("tile", "assets/tile.svg");
        this.load.image("controller", "assets/controller.svg");
        this.load.image("player", "assets/player.svg");
        this.load.image("enemy", "assets/enemy.svg");
        this.load.image("wall", "assets/wall.svg");
        
        this.load.image("step_forward", "assets/commands/step_forward.svg");
        this.load.image("step_backward", "assets/commands/step_backward.svg");
        this.load.image("step_left", "assets/commands/step_left.svg");
        this.load.image("step_right", "assets/commands/step_right.svg");
        this.load.image("turn_left", "assets/commands/turn_left.svg");
        this.load.image("turn_right", "assets/commands/turn_right.svg");
        this.load.image("hit_forward", "assets/commands/hit_forward.svg");
        this.load.image("explode_self", "assets/commands/explode_self.svg");
        this.load.image("dash_forward", "assets/commands/dash_forward.svg");

        this.load.image("step_forward_d", "assets/commands/drags/step_forward.svg");
        this.load.image("step_backward_d", "assets/commands/drags/step_backward.svg");
        this.load.image("step_left_d", "assets/commands/drags/step_left.svg");
        this.load.image("step_right_d", "assets/commands/drags/step_right.svg");
        this.load.image("turn_left_d", "assets/commands/drags/turn_left.svg");
        this.load.image("turn_right_d", "assets/commands/drags/turn_right.svg");
        this.load.image("hit_forward_d", "assets/commands/drags/hit_forward.svg");
        this.load.image("explode_self_d", "assets/commands/drags/explode_self.svg");
        this.load.image("dash_forward_d", "assets/commands/drags/dash_forward.svg");

        this.load.image("stop_sign", "assets/stop_sign.svg");

        this.load.image("turn_button", "assets/turn_button.svg");
        this.load.image("screen_cover", "assets/screen_cover.svg");
        this.load.image("build_button", "assets/accept_button.svg");

        this.load.image("level_tile", "assets/level_tile.svg");
        this.load.image("pellet", "assets/pellet.svg");
        //this.load.image("death_message", "assets/death_message.svg");        
    }
    show_loading() {
        const config = get_config();
        this.add.text(
            0.5*config.window.width,
            0.5*config.window.height,
            "Loading",
            {
                font: `bold 50px Monospace`, // TODO: Hardcoded values, move to config
                fill: "#ffffff",
                //backgroundColor: "#ffffff",
            }
        ).setOrigin(0.5);
    }
    create() {
        //this.scene.start("BuildScene");
        //this.scene.start("GameScene");        
        this.scene.start("LevelScene", {
            user: new User({name: "Player 1"}),
        });
    }
}
class LevelScene extends Phaser.Scene {
    // Execution order: constructor, init, create
    constructor() {
        super({ key: "LevelScene" });
    }
    init({user}) {
        this.user = user;
    }
    create() {
        const config = get_config();
        new LevelBoard({
            scene: this,
            board: new Board({
                scene: this,
                x: config.window.width*0.5,
                y: config.window.height*0.5,
                board_config: config.level_board,
            }),
        });

        this.add.text(
            0.5*config.window.width,
            0.3*config.window.height,
            "Choose level:",
            {
                font: "bold 50px Monospace", // TODO: Hardcoded values, move to config
                fill: "#ffffff",
                //backgroundColor: "#ffffff",
            }
        ).setOrigin(0.5);        
    }
}
class BuildScene extends Phaser.Scene {
    constructor() {
        super({ key: "BuildScene" });
    }
    init({user, level}) {
        this.user = user; // TODO: needed?
        this.level = level;
    }
    create() {
        const config = get_config()

        const build_board = new BuildBoard({
            board: new Board({
                scene: this,
                x: config.build_board.x,
                y: config.build_board.y,
                board_config: config.build_board,
            }),
        });
        const shop_board = new ShopBoard({
            board: new Board({
                scene: this,
                x: config.shop_board.x,
                y: config.shop_board.y,
                board_config: config.shop_board,
            }),
        });
        const build_button = new BuildButton({
            scene: this,
            x: config.build_button.x,
            y: config.build_button.y,
            btn_config: config.build_button,
        });
        
        build_button.attach_build_board({
            build_board: build_board,            
            next_level: this.level,
        });

        this.level.set_build_constraints(shop_board, build_board);
        shop_board.reset_board();        
        build_board.disable_board();

        this.add.text(
            0.2*config.window.width,
            0.2*config.window.height,
            "Level " + this.level.level_id,
            {
                font: "bold 50px Monospace", // TODO: Hardcoded values, move to config
                fill: "#ffffff",
                //backgroundColor: "#ffffff",
            }
        ).setOrigin(0.5);
    }
}
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameScene" });
    }
    init({user, level}) {
        this.user = user;
        this.level = level;
    }
    ensure_event_emitter() {
        if (this.event_emitter != undefined) {return;}
        this.event_emitter = new Phaser.Events.EventEmitter();
    }
    create() {
        this.input.topOnly = false; // Just for prettiness of hovering over the controller
        
        const config = get_config()
                
        const controller_board = new ControllerBoard({
            board: new Board({
                scene: this,
                x: config.window.width*0.25,
                y: config.window.height*0.35,
                board_config: config.controller_board,
            }),
            controller: new Controller({
                scene: this,
                x: null,
                y: null,
                controller_config: config.controller,            
            }),
        });
        this.controller_board = controller_board;
        
        const game_board = new GameBoard({
            board: new Board({
                scene: this,
                x: config.window.width*0.75,
                y: config.window.height*0.5,
                board_config: config.game_board,
            }),
            player: new Agent({
                scene: this,
                x: null,
                y: null,
                X: null,
                Y: null,
                dir: 1,
                game_board: null,
                agent_config: config.player,
            }),
        });
        this.game_board = game_board;
        
        const turn_button = new TurnButton({
            scene: this,
            x: config.turn_button.x,
            y: config.turn_button.y,
            btn_config: config.turn_button,
        });

        turn_button.attach_game_board({
            game_board: this.game_board,
            level: this.level
        });
        turn_button.end_turn({
            game_board: this.game_board,
            level: this.level,
        });
        
        game_board.player.new_resource(Resources.player_health({
            //scene: this,
            on_death: () => {
                // Screen cover ------------------------------------------------
                let screen_cover = new ScreenCover(this);
                screen_cover.setTint(0x000000);
                screen_cover.tween({ 
                    targets: screen_cover,
                    alpha: 0.8,
                    ease: "Sin",
                    duration: 2000,
                });
                // Death text --------------------------------------------------
                let death_text_pos = {x: config.window.width*0.5, y: config.window.height*0.5};
                let death_text = this.add.text(
                    death_text_pos.x,
                    death_text_pos.y,
                    "Game Over",
                    {
                        font: `bold 100px Monospace`,
                        fill: "#a00000",
                    },
                ).setOrigin(0.5).setDepth(100000).setAlpha(0);
                this.tweens.add({
                    targets: death_text,
                    alpha: 1,
                    ease: "Sin",
                    duration: 2000,
                });
                // -------------------------------------------------------------
                
                controller_board.disable_board();
                turn_button.state.set("disabled");
            },
            health_config: config.player.health,
        }));
        game_board.player.new_resource(Resources.player_energy({
            value: 5,
            max_value: Infinity,
            controller_board: controller_board,
            turn_button: turn_button,
            energy_config: config.player.energy,
        }));
        game_board.player.new_resource(Resources.player_ultimate({
            controller_board: controller_board,
            turn_button: turn_button,
            ultimate_config: config.player.ultimate,
        }));
        game_board.player.new_resource(Resources.player_kills({
            max_value: this.level.win_kills,
            on_win: () => {
                // Screen cover ------------------------------------------------
                let screen_cover = new ScreenCover(this);
                screen_cover.setTint(0x000000);
                screen_cover.tween({ 
                    targets: screen_cover,
                    alpha: 0.8,
                    ease: "Sin",
                    duration: 2000,
                });
                // Death text --------------------------------------------------
                let win_text_pos = {x: config.window.width*0.5, y: config.window.height*0.5};
                let win_text = this.add.text(
                    win_text_pos.x,
                    win_text_pos.y,
                    "Victory",
                    {
                        font: `bold 100px Monospace`,
                        fill: "#00a000",
                    },
                ).setOrigin(0.5).setDepth(100000).setAlpha(0);
                this.tweens.add({
                    targets: win_text,
                    alpha: 1,
                    ease: "Sin",
                    duration: 2000,
                });
                // -------------------------------------------------------------
                
                controller_board.disable_board();
                turn_button.state.set("disabled");
            },
            kills_config: config.player.kills,
        }));

        this.add.text(
            0.25*config.window.width,
            0.8*config.window.height,
            "Level " + this.level.level_id,
            {
                font: "bold 50px Monospace", // TODO: Hardcoded values, move to config
                fill: "#ffffff",
                //backgroundColor: "#ffffff",
            }
        ).setOrigin(0.5);
        
        this.ensure_event_emitter()
        this.event_emitter.emit("created");
    }
    __command_crap() {
        controller_board.place_command({
            X: 2,
            Y: 1,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "step_forward",
                command_config: config.commands["step_forward"],
            }),
        }); // step_forward
        controller_board.place_command({
            X: 2,
            Y: 2,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "step_forward",
                command_config: config.commands["step_forward"],
            }),
        }); // step_forward
        controller_board.place_command({
            X: 1,
            Y: 2,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "turn_left",
                command_config: config.commands["turn_left"],
            }),
        }); // turn_left
        controller_board.place_command({
            X: 1,
            Y: 1,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "turn_left",
                command_config: config.commands["turn_left"],
            }),
        }); // turn_left
        controller_board.place_command({
            X: 3,
            Y: 2,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "turn_right",
                command_config: config.commands["turn_right"],
            }),
        }); // turn_right
        controller_board.place_command({
            X: 3,
            Y: 1,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "turn_right",
                command_config: config.commands["turn_right"],
            }),
        }); // turn_right
        controller_board.place_command({
            X: 1,
            Y: 3,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
        controller_board.place_command({
            X: 2,
            Y: 3,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
        controller_board.place_command({
            X: 3,
            Y: 3,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
        controller_board.place_command({
            X: 1,
            Y: 0,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
        controller_board.place_command({
            X: 2,
            Y: 0,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
        controller_board.place_command({
            X: 3,
            Y: 0,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
    }
    __shop_board_crap() {
                const place_command = ({X, Y, command_id}) => {
            shop_board.place_command({
                X: X,
                Y: Y,
                command: new Command({
                    scene: this,
                    game_board: null,
                    command_id: command_id,
                    command_config: config.commands[command_id],
                }),
            });
            shop_board.place_drag({
                X: X,
                Y: Y,
                drag: new CommandDrag({
                    scene: this,
                    controller_board: controller_board,
                    command_config: config.command_drags[command_id],
                }),
            });
        };
        place_command({X: 0, Y: 0, command_id: "step_forward"});
        place_command({X: 1, Y: 0, command_id: "step_backward"});
        place_command({X: 2, Y: 0, command_id: "turn_left"});
        place_command({X: 3, Y: 0, command_id: "turn_right"});
        place_command({X: 4, Y: 0, command_id: "step_left"});
        place_command({X: 5, Y: 0, command_id: "step_right"});
        place_command({X: 0, Y: 1, command_id: "hit_forward"});
        place_command({X: 1, Y: 1, command_id: "explode_self"});
        place_command({X: 2, Y: 1, command_id: "dash_forward"});
        shop_board.reset_board();
    }
}
// Basic board /////////////////////////////////////////////////////////////////
class Board {
    constructor({scene, x, y, board_config}) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.config = board_config;
        this.tiles = Array(board_config.nrows).fill().map((_,i) => 
             Array(board_config.ncols).fill().map((_,j) => new Tile({
                 scene: scene,
                 x: board_config.step*j + x - (board_config.ncols - 1)*board_config.step/2,
                 y: board_config.step*i + y - (board_config.nrows - 1)*board_config.step/2,
                 tile_config: board_config.tile,
             }))
        );
    }
    foreach(func) {
        for (let X = 0; X < this.config.ncols; X++) {
            for (let Y = 0; Y < this.config.nrows; Y++) {
                func(X,Y);
            }
        }
    }
    foreach_rev(func) {
        for (let X = this.config.ncols-1; X >= 0; X--) {
            for (let Y = this.config.nrows-1; Y >= 0; Y--) {
                func(X,Y);
            }
        }
    }
    contains({X,Y}) {
        return X >= 0 && Y >= 0 && X < this.config.ncols && Y < this.config.nrows;
    }    
}
class Tile extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, tile_config}) {
        super(scene, x, y, tile_config.img);
                
        //let config = get_config();                
        this.displayWidth = tile_config.width;
        this.scaleY = this.scaleX;
        this.state = new VisState({
            sprite: this,
            state_map: tile_config.state_map,
            init_state: tile_config.init_state,
            tint_time: tile_config.time.tint,
            scale_time: tile_config.time.scale,
        });

        scene.add.existing(this);

        this.setInteractive();
        this.on("pointerover", () => {
            const state = this.state.get();
            if (state == "disabled" || state == "locked") {return;} // TODO: Ugly?
            this.state.set("hover");
        });
        this.on("pointerout", () => {
            const state = this.state.get();
            if (state == "disabled" || state == "locked") {return;}
            this.state.set("enabled");
        });

        this.event_emitter = new Phaser.Events.EventEmitter();        
    }
    preUpdate(time, delta) {
        this.event_emitter.emit("preUpdate", time, delta);
    }
}
class VisState {
    constructor({sprite, state_map, init_state, scale_time, tint_time}) {
        this.sprite = sprite;
        this.state = init_state;
        this.tint = state_map[this.state].tint;
        this.state_map = state_map;
        this.scale_time = scale_time;
        this.tint_time = tint_time;
        
        this.original_scale = this.sprite.scale;

        this.sprite.setTint(this.tint);
    }
    get() {
        return this.state;
    }
    set(state) {
        // Scale ---------------------------------------------------------------
        this.sprite.scene.tweens.add({
            targets: this.sprite,
            scale: this.original_scale*this.state_map[state].scale,
            ease: "Quint.Out",
            duration: this.scale_time,
        });
        
        // Tint ----------------------------------------------------------------
        let current_tint = ColorFunctions.hexIntToRGB(this.state_map[this.state].tint);
        let target_tint = ColorFunctions.hexIntToRGB(this.state_map[state].tint);

        this.sprite.scene.tweens.add({
            targets: current_tint,
            r: target_tint.r,
            g: target_tint.g,
            b: target_tint.b,
            duration: this.tint_time,
            onUpdate: (tween) => {
                let combined_tint = (current_tint.r << 16) | (current_tint.g << 8) | current_tint.b;
                this.sprite.setTint(combined_tint);
            }
        });

        // Update --------------------------------------------------------------
        this.state = state;
        this.tint = this.state_map[state]["tint"];
        //console.log(this.tint)
    }
}
// Special boards //////////////////////////////////////////////////////////////
class ControllerBoard {
    constructor({board, controller}) {
        this.controller = controller;
        this.board = board;
        
        this.commands = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));

        // Centralize controller -------------------------------------------------
        let center = {
            X: Math.floor(this.board.config.nrows*0.5),
            Y: Math.floor(this.board.config.ncols*0.5),
        };
        this.controller.X = center.X;
        this.controller.Y = center.Y;        
        this.controller.x = this.board.tiles[center.Y][center.X].x;
        this.controller.y = this.board.tiles[center.Y][center.X].y;
        // ---------------------------------------------------------------------       

        this.event_emitter = new Phaser.Events.EventEmitter();

        this.setup_board();
    }
    setup_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            tile.on("pointerup", () => {
                this.on_click(X,Y);
            });
            tile.on("pointerover", () => {
                let command = this.commands[Y][X];
                if (command == null) {return;}
                command.state.set("hover");
            });
            tile.on("pointerout", () => {
                let command = this.commands[Y][X];
                if (command == null) {return};
                command.state.set("enabled");
            });
        });
        this.reset_board();
    }
    reset_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            if (this.dist_to_joistick(X,Y) == 1) {
                tile.state.set("enabled");                
            }
            else {
                tile.state.set("disabled");                    
            }
        });
    }
    dist_to_joistick(X,Y) {
        let delta = {X: Math.abs(X - this.controller.X), Y:Math.abs(Y - this.controller.Y)}
        return Math.max(delta.X, delta.Y)
        //return delta.X <= 1 && delta.Y <= 1 && (delta.X + delta.Y) > 0;
    }
    on_click(X,Y) {
        this.event_emitter.emit("click", X, Y);
        
        let tile = this.board.tiles[Y][X];
        if (tile.state.get() == "disabled") {return;}
        
        this.controller.X = X;
        this.controller.Y = Y;        
        this.controller.tween_pos({x:tile.x, y:tile.y});

        let command = this.commands[Y][X];

        //this.reset_board(); // TODO: Redundantly called twice because of event below (see Resources.energy)
        this.event_emitter.emit("execute", X, Y); 
        // WARNING: The above line should be called BEFORE the below line,
        // otherwise controller board is not disabled on victory
        if (command != null) { command.execute(); }
    }    
}
class GameBoard {
    constructor({board, player}) {
        this.board = board;
        this.player = player;

        this.entities = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));

        this.insert({
            X: 2,
            Y: board.config.nrows-1,//Math.ceil(board.config.nrows/2)+1,
            entity: player,
        });
        
        //this.setup_board();
    }
    insert({X, Y, entity}) {
        this.entities[Y][X] = entity;
        entity.X = X;
        entity.Y = Y;
        entity.game_board = this;
        
        let tile = this.board.tiles[Y][X];
        entity.x = tile.x;
        entity.y = tile.y;
    }
    pop(X, Y) {
        let agent = this.entities[Y][X];
        this.entities[Y][X] = null;

        if (agent != null) {
            //agent.x = null;
            //agent.y = null;
            agent.X = null;
            agent.Y = null;
        }
        
        return agent;
    }
}
class ShopBoard {
    constructor({board}) {
        this.board = board;
        this.commands = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));

        this.drags = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));
        
        this.setup_board();
    }
    setup_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            tile.on("pointerup", () => {
                this.on_click(X,Y);                
            });
            tile.on("pointerover", () => {
                let command = this.commands[Y][X];
                if (command == null) {return;}
                command.state.set("hover");
            });
            tile.on("pointerout", () => {
                let command = this.commands[Y][X];
                if (command == null) {return;}
                command.state.set("enabled");
            });
        });
    }
    reset_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            let command = this.commands[Y][X];
            if (command != null) {
                tile.state.set("enabled");                
            }
            else {
                tile.state.set("disabled");                    
            }
        });
    }
    place_drag({X, Y, drag}) {
        let tile = this.board.tiles[Y][X];

        drag.x = tile.x;
        drag.y = tile.y;
        drag.alpha = 0;
        this.drags[Y][X] = drag;
        drag.shop_board = this;
        drag.X = X;
        drag.Y = Y;
    }
    on_click(X,Y) {
        let tile = this.board.tiles[Y][X];
        if (tile.state.get() == "disabled") {return;}
        let command = this.commands[Y][X];
        
        let drag = this.drags[Y][X];

        drag.appear_at(command);
    }
}
class BuildBoard {
    constructor({board}) {
        this.board = board;

        this.commands = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));
        this.unlocked = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => true));

        this.event_emitter = new Phaser.Events.EventEmitter();
        
        this.setup_board();
    }
    setup_board() {
        // TODO: Repeats ControllerBoard.setup_board()
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];            
            tile.on("pointerup", () => {
                this.on_click(X,Y);
            });
            tile.on("pointerover", () => {
                let command = this.commands[Y][X];
                if (command == null) {return;}
                command.state.set("hover");
            });
            tile.on("pointerout", () => {
                let command = this.commands[Y][X];
                if (command == null) {return};
                command.state.set("enabled");
            });            
        });        
    }
    on_click(X,Y) {
        if (!this.unlocked[Y][X]) {return;}
        this.event_emitter.emit("click", X, Y);
    }
    reset_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            if (this.unlocked[Y][X]) { // TODO: tile not locked
                tile.state.set("enabled");
            }
            else {
                //tile.state.state_map["disabled"].tint = 0xff00ff; // TODO: Hardcoded value: color
                tile.state.set("locked");
            }
        });
    }
    disable_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            if (this.unlocked[Y][X]) {
                tile.state.set("disabled");
            }
            else {
                tile.state.state = "locked"; // Hack to avoid visible color tweening
                tile.state.set("locked");
            }
        });
    }
}
class LevelBoard {
    constructor({scene, board}) {
        this.scene = scene;
        this.board = board;

        this.levels = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));

        this.board.foreach((X, Y) => {
            const tile = this.board.tiles[Y][X];
            const level_text = this.board.scene.add.text(
                tile.x,
                tile.y,
                5*Y + X + 1,
                {
                    font: "bold 30px Monospace", // TODO: Hardcoded values, move to config
                    fill: "#ffffff",
                }
            ).setOrigin(0.5);
            const original_level_text_scale = level_text.scale;
            tile.event_emitter.on("preUpdate", (time, delta) => {
                level_text.scale = tile.scale*original_level_text_scale*3; // TODO: Hardcoded number 3?
                level_text.setTint(tile.state.tint);
            });
        });
                
        this.event_emitter = new Phaser.Events.EventEmitter();
        
        this.setup_board();
    }
    setup_board() {
        // TODO: Repeats ControllerBoard.setup_board()
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            tile.on("pointerup", () => {
                this.on_click(X,Y);                
            });
        });
    }
    on_click(X,Y) {
        this.event_emitter.emit("click", X, Y);

        const level_id = this.board.config.ncols*Y + X + 1;
        const level = {
            1: new Level1(),
            2: new Level2(),
            3: new Level3(),
        }[(level_id-1) % 3 + 1];
        
        this.board.scene.scene.start("BuildScene", {
            user: this.scene.user,
            level: level,
        });
    }
}
const BoardMethods = {    
    remove_command(X,Y) {
        let command = this.commands[Y][X];
        this.commands[Y][X] = null;
        
        if (command == null) {return;}
        command.destroy(); // TODO: destroy outside of remove_command, instead return command
    },
    place_command({X,Y, command}) {
        let tile = this.board.tiles[Y][X];
        command.x = tile.x;
        command.y = tile.y;
        this.commands[Y][X] = command;
    },
};
const DisableBoardMethods = {
    disable_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            tile.state.set("disabled");
        });
    },
};
Object.assign(ControllerBoard.prototype, BoardMethods, DisableBoardMethods);
Object.assign(ShopBoard.prototype, BoardMethods, DisableBoardMethods);
Object.assign(BuildBoard.prototype, BoardMethods);
// Entities ////////////////////////////////////////////////////////////////////
class Controller extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, controller_config}) {
        super(scene, x, y, controller_config.img);
        //this.scene = scene;
                
        this.config = controller_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;

        this.setTint(this.config.tint);
        this.X = null;
        this.Y = null;

        this.setInteractive();        
        this.lock_faded = false; // TODO: Unethical?
        this.setup_hover_fade();

        this.setDepth(this.config.depth);

        scene.add.existing(this);
    }
    setup_hover_fade() {
        this.on("pointerover", () => {
            this.scene.time.delayedCall(this.config.hover.delay, () => {
                const pointer = this.scene.input.activePointer;
                const bounds = this.getBounds();
                
                if (bounds.contains(pointer.x, pointer.y)) {
                    this.tween_alpha({from: this.alpha, to: this.config.hover.alpha});
                }
                
            }, [], this);
        });
        this.on("pointerout", () => {            
            this.scene.time.delayedCall(this.config.hover.delay, () => {
                if (this.lock_faded) {return;}
                this.tween_alpha({from: this.alpha, to: 1});                
            }, [], this);
        });
    }
}
class Agent extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, X, Y, dir, game_board, agent_config}) {
        super(scene, x, y, agent_config.img);
        //this.scene = scene;

        this.config = agent_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;

        this.setTint(this.config.tint);

        this.X = X;
        this.Y = Y;
        this.game_board = game_board;
        
        this.dir = dir; // *Math.PI/2
        this.angle = this.get_phaser_angle_deg(0);

        this.event_emitter = new Phaser.Events.EventEmitter();

        this.setDepth(this.config.depth);

        scene.add.existing(this);        
    }
    get_angle(rel_dir) {
        return (this.dir + rel_dir)*Math.PI/2
    }
    get_angle_deg(rel_dir) {
        return (this.dir + rel_dir)*90
    }
    get_phaser_angle_deg(rel_dir) {
        return -this.get_angle_deg(rel_dir) + 90;
    }    
    turn_to(dir) {
        // https://newdocs.phaser.io/docs/3.60.0/focus/Phaser.GameObjects.Sprite-angle
        this.dir = dir;        
        let angle = this.get_phaser_angle_deg(0);
        this.tween_angle(angle);

        this.dir = this.dir % 4;
        this.dir = (this.dir + 4) % 4;
    }
    preUpdate(time, delta) {
        this.event_emitter.emit("update", time, delta);
    }
    FR2XY({F, R}) {
        let F_angle = this.get_angle(0);
        let R_angle = this.get_angle(-1);

        let F_vec = {
            X: Math.round(Math.cos(F_angle)),
            Y: -Math.round(Math.sin(F_angle)), // minus because Y points down
        };
        let R_vec = {
            X: Math.round(Math.cos(R_angle)),
            Y: -Math.round(Math.sin(R_angle)), // minus because Y points down
        };
        
        let XY_pos = {
            X: this.X + F*F_vec.X + R*R_vec.X,
            Y: this.Y + F*F_vec.Y + R*R_vec.Y,
        };

        return XY_pos;
    }
}
const TweenMethods = {
    tween_pos({x,y, on_complete}) {        
        this.scene.tweens.add({
            targets: this,
            x: x,
            y: y,
            ease: "Quint.Out",
            duration: this.config.time.move,
            onComplete: on_complete, // TODO: Remove?
        });
    },
    tween_alpha({from, to, on_complete}) {
        this.alpha = from;        
        this.scene.tweens.add({
            targets: this,
            alpha: {from: from, to: to},
            ease: "Quint.Out",
            duration: this.config.time.fade,
            onComplete: on_complete,
        });
    },
    tween_angle(angle) {
        this.scene.tweens.add({
            targets: this,
            angle: angle,
            ease: "Quint.Out",
            duration: this.config.time.move,
        });
    },
    tween_wobble() {
        this.scene.tweens.add({
            targets: this,
            x: this.x + 10,
            ease: "Sin",
            duration: this.config.time.wobble,
            repeat: 0,
            yoyo: true,
            onComplete: () => {
                this.scene.tweens.add({
                    targets: this,
                    x: this.x - 10,
                    ease: "Sin",
                    duration: this.config.time.wobble,
                    repeat: 0,
                    yoyo: true,
                });
            },
        });
    },
    tween_boop({factor, duration}) {
        this.scene.tweens.add({
            targets: this,
            scale: {from: factor*this.scale, to: this.scale},
            ease: "Quint.Out",
            duration: duration,
        });
    },
};
const CommandMethods = {
    step({F, R}) {
        // F: Forward, R: Right        
        let target_pos = this.FR2XY({F:F, R:R});
        if (!this.game_board.board.contains(target_pos)) {return;}
        if (this.game_board.entities[target_pos.Y][target_pos.X] != null) {return;}
                
        let tile = this.game_board.board.tiles[target_pos.Y][target_pos.X];

        this.game_board.pop(this.X, this.Y)
        
        this.game_board.entities[target_pos.Y][target_pos.X] = this;
        this.X = target_pos.X;
        this.Y = target_pos.Y;
        this.tween_pos({x: tile.x, y: tile.y, on_complete: () => {
            //this.event_emitter.emit("arrive"); // TODO: Remove?
        }});
    },
    turn({dir}) {
        this.turn_to(this.dir + dir);
    },
    hit({F, R, dmg}) {
        this.tween_boop({factor: 0.8, duration: 1000});
        // F: Forward, R: Right
        let target_pos = this.FR2XY({F:F, R:R});
        if (!this.game_board.board.contains(target_pos)) {return;}

        let target = this.game_board.entities[target_pos.Y][target_pos.X];

        if (target != null) {
            target.modify_resource("health", -dmg);
        }
    },
    explode({dmg}) {
        this.tween_boop({factor: 1.2, duration: 2000});
        TextMethods.boom_text({target: this});
                
        for (let X = -1; X <= 1; X++) {
            for (let Y = -1; Y <= 1; Y++) {
                let target_pos = {Y: this.Y + Y, X: this.X + X};
                if (!this.game_board.board.contains(target_pos)) {continue;}
                if (X==0 && Y==0) {continue;}
                let target = this.game_board.entities[this.Y + Y][this.X + X];
                if (target != null) {
                    target.modify_resource("health", -dmg);
                }
            }
        }
        let screen_cover = new ScreenCover(this.game_board.board.scene);
        screen_cover.setTint(0xffffff);
        screen_cover.tween({ 
            targets: screen_cover,
            alpha: 0.2,
            ease: "Sin",
            duration: 500,
            yoyo: true,
            onComplete: () => {
                screen_cover.destroy();
            },
        });
    },
};
class Resources {
    static enemy_health({start_value, max_value, health_config}) {
        return {
            name: "health",
            start_value: start_value,
            max_value: max_value,
            on_created: ({target}) => {
                let health_value = target._resources["health"].value;
                target._health_banner = target.scene.add.text(
                    target.x,
                    target.y,// - target.config.health.banner.glift, // Minus kinda redundant
                    ` ${health_value} `,
                    {
                        font: `bold ${health_config.font_size}px Monospace`,
                        fill: "#ffffff",
                        backgroundColor: health_config.color,
                    }
                ).setOrigin(0.5);
                target._health_banner.setDepth(health_config.depth);
                target.event_emitter.on("update", (time, delta) => {
                    target._health_banner.x = target.x;
                    target._health_banner.y = target.y - target.config.health.banner.lift;
                    target._health_banner.alpha = target.alpha;
                });
            },
            on_modified: ({target, old_val}) => {
                let health_value = target.get_resource("health");
                target._health_banner.text = ` ${health_value} `;
                target.tween_wobble();

                // Damage text -------------------------------------------------
                TextMethods.damage_text({
                    target: target,
                    damage: old_val - health_value,
                });
                // -------------------------------------------------------------
                
                if (health_value > 0) {return;}

                target.scene.event_emitter.emit("enemy_died", target); // TODO: Dangerous?
                
                target.game_board.entities[target.Y][target.X] = null;
                target.tween_alpha({
                    from: 1,
                    to: 0.0,
                    on_complete: () => {
                        target.event_emitter.emit("death");
                        target._health_banner.destroy();
                        target.destroy();
                    },
                });
            },
        };
    }
    static player_health({on_death, health_config}) {
        return {
            name: "health",
            start_value: health_config.values.start,
            max_value: health_config.values.max,
            on_created: ({target}) => {
                let health_value = target._resources["health"].value;
                target._health_banner = target.scene.add.text(
                    target.x,
                    target.y,
                    ` ${health_value} `,
                    {
                        font: `bold ${health_config.banner.font_size}px Monospace`,
                        fill: "#ffffff",
                        backgroundColor: health_config.banner.color,
                    }
                ).setOrigin(0.5);
                target._health_banner.setDepth(health_config.banner.depth);
                target.event_emitter.on("update", (time, delta) => {
                    target._health_banner.x = target.x;
                    target._health_banner.y = target.y-target.config.health.banner.lift;
                    target._health_banner.alpha = target.alpha;
                });
                
                target._health_display = target.scene.add.text(
                    health_config.display.x,
                    health_config.display.y,
                    ` Health: ${health_value}/${health_config.values.max} `,
                    {
                        font: `bold ${health_config.display.font_size}px Monospace`,
                        fill: "#ffffff",
                        backgroundColor: health_config.display.color,
                    }
                ).setOrigin(0.5);
                target._health_display.setDepth(health_config.display.depth);                                
            },
            on_modified: ({target, old_val}) => {
                let health_value = target.get_resource("health");
                target._health_banner.text = ` ${health_value} `;
                target._health_display.text = ` Health: ${health_value} `;
                target.tween_wobble();

                // Screen cover ------------------------------------------------
                if (health_value < old_val) {
                    let screen_cover = new ScreenCover(target.scene);
                    screen_cover.setTint(health_config.screen_cover.color);
                    screen_cover.tween({ 
                        targets: screen_cover,
                        alpha: 0.5,
                        ease: "Sin",
                        duration: health_config.screen_cover.time,
                        yoyo: true,
                        onComplete: () => {
                            screen_cover.destroy();
                        },
                    });
                }
                TextMethods.damage_text({
                    target: target,
                    damage: old_val - health_value,
                });
                // -------------------------------------------------------------
                
                
                if (health_value > 0) {return;}
                target.game_board.entities[target.Y][target.X] = null;
                on_death();
                target.tween_alpha({
                    from: 1,
                    to: 0.0,
                    on_complete: () => {
                        target.destroy();
                        target._health_banner.destroy();
                    },
                });
            },
        };
    }
    static player_energy({controller_board, turn_button, energy_config}) {
        return {
            name: "energy",
            start_value: energy_config.values.start,
            max_value: energy_config.values.max,
            on_created: ({target}) => {
                let energy_value = target.get_resource("energy");
                target._energy_text = target.scene.add.text(
                    energy_config.display.x,
                    energy_config.display.y,
                    ` Energy: ${energy_value}/${energy_config.values.max} `,
                    {
                        font: `bold ${energy_config.display.font_size}px Monospace`,
                        fill: "#ffffff",
                        backgroundColor: energy_config.display.color,
                    }
                ).setOrigin(0.5);
                target._energy_text.setDepth(energy_config.depth);

                controller_board.event_emitter.on("execute", (X, Y) => {
                    target.modify_resource("energy", -1);
                });
                turn_button.event_emitter.on("click", () => {
                    if (target.get_resource("health") == 0) {return;} // No energy regen after death
                    target.set_resource("energy", energy_config.values.max);
                });
            },
            on_modified: ({target, old_val}) => {
                let energy_value = target.get_resource("energy");
                target._energy_text.text = ` Energy: ${energy_value}/${energy_config.values.max} `;
                if (energy_value == 0) {
                    controller_board.disable_board();
                }
                else {
                    controller_board.reset_board();
                }
            },
        }
    }
    static player_ultimate({controller_board, turn_button, ultimate_config}) {
        return {
            name: "ultimate",
            start_value: ultimate_config.values.start,
            max_value: ultimate_config.values.max,
            on_created: ({target}) => {
                let ultimate_value = target.get_resource("ultimate");
                target._ultimate_text = target.scene.add.text(
                    ultimate_config.display.x,
                    ultimate_config.display.y,
                    ` Ultimate: ${ultimate_value}/${ultimate_config.values.max} `,
                    {
                        font: `bold ${ultimate_config.display.font_size}px Monospace`,
                        fill: "#ffffff",
                        backgroundColor: ultimate_config.display.color,
                    }
                ).setOrigin(0.5);
                target._ultimate_text.setDepth(ultimate_config.display.depth);
            },
            on_modified: ({target, old_val}) => {
                let ultimate_value = target.get_resource("ultimate");
                target._ultimate_text.text = ` Ultimate: ${ultimate_value}/${ultimate_config.values.max} `;
            },
        }
    }
    static player_kills({max_value, on_win, kills_config}) {
        return {
            name: "kills",
            start_value: 0,
            max_value: max_value,
            on_created: ({target}) => {
                let kills_value = target.get_resource("kills");
                target._kills_text = target.scene.add.text(
                    kills_config.display.x,
                    kills_config.display.y,
                    ` Kills: ${kills_value}/${max_value} `,
                    {
                        font: `bold ${kills_config.display.font_size}px Monospace`,
                        fill: "#ffffff",
                        backgroundColor: kills_config.display.color,
                    }
                ).setOrigin(0.5);
                target._kills_text.setDepth(kills_config.display.depth);
                target.scene.event_emitter.on("enemy_died", (enemy) => {
                    target.modify_resource("kills", 1);
                })
            },
            on_modified: ({target, old_val}) => {
                let kills_value = target.get_resource("kills");
                target._kills_text.text = ` Kills: ${kills_value}/${max_value} `;

                if (kills_value < max_value) {return;}
                on_win();
            },
        }
    }
}
const ResourceMethods = {
    ensure_resources() {
        if (this._resources === undefined) {
            this._resources = {};
        }
    },
    new_resource({name, start_value, max_value, on_created, on_modified}) {
        this.ensure_resources();
        this._resources[name] = {
            value: start_value,
            max_value: max_value,
            on_modified: on_modified,
        };
        on_created({target: this});
    },
    get_resource(name) {
        return this._resources[name].value;
    },
    set_resource(name, value) {
        let old_val = this._resources[name].value;
        let new_val = Math.min(Math.max(value, 0), this._resources[name].max_value);
        this._resources[name].value = new_val;
        this._resources[name].on_modified({
            target: this,
            old_val: old_val,    
        });
    },
    modify_resource(name, delta) {
        this.set_resource(name, this._resources[name].value + delta);
    },
};
Object.assign(Controller.prototype, TweenMethods);
Object.assign(Agent.prototype, TweenMethods, ResourceMethods, CommandMethods);
// More agents /////////////////////////////////////////////////////////////////
class Enemy extends Agent {
    // TODO: Separate into one class per enemy
    static base_act(enemy) {
        let target_XY = enemy.FR2XY({F:1, R:0});

        if (target_XY.Y >= enemy.game_board.board.config.nrows) {
            enemy.game_board.player.set_resource("health", 0);
        }
        
        if (!enemy.game_board.board.contains(target_XY)) {return;}
        if (enemy.game_board.entities[target_XY.Y][target_XY.X] == enemy.game_board.player) {
            enemy.hit({F: 1, R: 0, dmg: 1});
        }
        else {
            enemy.step({F: 1, R: 0});
        }
    }
    static basic(args) {
        let agent_config = args.agent_config;                
        let enemy = new Enemy(args);

        enemy.act = () => {
            Enemy.base_act(enemy);
        };
        
        enemy.new_resource(Resources.enemy_health({
            start_value: agent_config.health.start_value,
            max_value: agent_config.health.max_value,
            health_config: agent_config.health.banner,
        }));
        return enemy;
    }
    static fast(args) {
        let agent_config = args.agent_config;
        let enemy = new Enemy(args);
        
        //const base_act = enemy.act;
        enemy.act = () => {Enemy.base_act(enemy); Enemy.base_act(enemy);};

        enemy.new_resource(Resources.enemy_health({
            start_value: agent_config.health.start_value,
            max_value: agent_config.health.max_value,
            health_config: agent_config.health.banner,
        }));
        
        return enemy;
    }
    static slow(args) {
        let agent_config = args.agent_config;
        let enemy = new Enemy(args);
        const config = get_config();

        enemy.stop = false;
        enemy.stop_sign = new StopSign({
            scene: enemy.scene,
            x: enemy.x,
            y: enemy.y,
            stop_config: config.stop_sign,
        });
        enemy.event_emitter.on("update", (time, delta) => {
            enemy.stop_sign.x = enemy.x;
            enemy.stop_sign.y = enemy.y;
            if (enemy.stop) {
                enemy.stop_sign.alpha = enemy.alpha;
            }            
        });
        enemy.event_emitter.once("death", () => {
            enemy.stop_sign.destroy();
        });
        
        enemy.act = () => {
            if (!enemy.stop) {
                Enemy.base_act(enemy);
            }
            enemy.stop = !enemy.stop;
            if (enemy.stop) {
                enemy.stop_sign.tween_alpha({from: 0, to: 1});
            }
            else {
                enemy.stop_sign.tween_alpha({from: 1, to: 0});
            }
        };

        enemy.new_resource(Resources.enemy_health({
            start_value: agent_config.health.start_value,
            max_value: agent_config.health.max_value,
            health_config: agent_config.health.banner,
        }));
        
        return enemy;
    }
}
// Effects /////////////////////////////////////////////////////////////////////
class StopSign extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, stop_config}) {
        super(scene, x, y, stop_config.img);
        //this.scene = scene;

        this.config = stop_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;

        this.setTint(this.config.tint);
        this.alpha = 0;

        this.setDepth(this.config.depth);

        scene.add.existing(this);
    }
}
Object.assign(StopSign.prototype, TweenMethods);
// Buttons /////////////////////////////////////////////////////////////////////
class Button extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, btn_config}) {
        super(scene, x, y, btn_config.img);

        //this.scene = scene;

        this.config = btn_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;
        
        this.state = new VisState({
            sprite: this,
            state_map: this.config.state_map,
            init_state: this.config.init_state,
            tint_time: btn_config.time.tint,
            scale_time: btn_config.time.scale,
        });

        this.event_emitter = new Phaser.Events.EventEmitter();

        scene.add.existing(this);

        this.setInteractive();
        this.on("pointerover", () => {
            if (this.state.get() == "disabled") {return;}
            this.state.set("hover");
        });
        this.on("pointerout", () => {
            if (this.state.get() == "disabled") {return;}
            this.state.set("enabled");
        });
        this.on("pointerup", () => {
            if (this.state.get() == "disabled") {return;}
            this.event_emitter.emit("click");
        });
    }
}
class BuildButton extends Button {
    attach_build_board({build_board, next_level}) {
        this.event_emitter.once("click", () => {
            this.scene.scene.start("GameScene", {
                user: this.scene.user,
                level: this.scene.level,
            });
            const game_scene = this.scene.scene.get("GameScene");
            game_scene.level = this.scene.level;
            
            game_scene.ensure_event_emitter(); // TODO: maybe not needed, check constructor, init, create order..
            game_scene.event_emitter.once("created", () => {                
                build_board.board.foreach((X, Y) => {
                    const build_command = build_board.commands[Y][X];
                    if (build_command == null) {return;}
                    game_scene.controller_board.place_command({
                        X: X,
                        Y: Y,
                        command: new Command({
                            scene: game_scene,
                            game_board: game_scene.game_board,
                            command_id: build_command.command_id,
                            command_config: build_command.config,
                        }),
                    });
                });
            });
        });
    }
}
class TurnButton extends Button {
    attach_game_board({game_board, level}) {
        this.event_emitter.on("click", () => {
            this.end_turn({
                game_board: game_board,
                level: level,
            });
        });
    }
    end_turn({game_board, level}) {
        this.everybody_act(game_board);            
        this.spawn_enemies({
                game_board: game_board,
                level: level,
            });
    }
    everybody_act(game_board) {
        game_board.board.foreach_rev((X,Y) => {
            let agent = game_board.entities[Y][X];
            if (agent == null || agent == game_board.player) {return;}
            agent.act();
        });
    }
    spawn_enemies({game_board, level}) {
        level.make_turn(game_board);
    }
    __old_spawning__() {
        let config = get_config(); // TODO: Move out?
        let Y = 0;        
        for (let X = 0; X < game_board.board.config.ncols; X++) {
            if (game_board.entities[Y][X] != null) {continue;}
            if (Math.random() > 0.4) {continue;}
            let enemy;
            const rand = Math.random();
            if (rand < 0.5) {
                enemy = Enemy.basic({
                    scene: this.scene,
                    dir: -1,
                    agent_config: config.enemies.basic,
                });
            }
            else if (rand < 0.75) {
                enemy = Enemy.fast({
                    scene: this.scene,
                    dir: -1,
                    agent_config: config.enemies.fast,
                });
            }
            else {
                enemy = Enemy.slow({
                    scene: this.scene,
                    dir: -1,
                    agent_config: config.enemies.slow,
                });
            }
            
            enemy.tween_alpha({
                from: 0.0,
                to: 1,
            });
            game_board.insert({
                X: X,
                Y: Y,
                entity: enemy,
            });
        }
    }
}
// More UI /////////////////////////////////////////////////////////////////////
class ScreenCover extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        let config = get_config();
        let x = config.window.width*0.5;
        let y = config.window.height*0.5;        
        super(scene, x, y, "screen_cover");
        

        this.alpha = 0;
        this.displayWidth = config.window.width;
        this.scaleY = this.scaleX;
        
        //this.alpha = 0;
        //
        this.setDepth(1000);

        scene.add.existing(this);
    }
    tween(tween_config) {
        this.scene.tweens.add(tween_config);
    }
}
class TextMethods {
    static slide_out({scene, x, y, offset, text, text_config, duration}) {
        let text_obj = scene.add.text(
            x, y, text,
            {
                font: text_config.font,
                fill: text_config.fill,
            },
        ).setOrigin(0.5).setDepth(1000); // TODO: Hardcoded number
        scene.tweens.add({
            targets: text_obj,
            x: x + offset.x,
            y: y + offset.y,
            alpha: 0,
            ease: "Quint.Out",
            duration: duration, // TODO: Hardcoded number
            onComplete: () => {text_obj.destroy()},
        });
    }
    static damage_text({target, damage}) {
        TextMethods.slide_out({
            scene: target.scene,
            x: target.x,
            y: target.y - target.config.health.banner.lift,
            offset: {x: 0, y: -0.5*target.config.health.banner.lift},
            duration: 2000,
            text: damage,
            text_config: {
                font: "bold 30px Monospace",
                fill: "#ffff00",
            },
        });
    }
    static boom_text({target}) {
        TextMethods.slide_out({
            scene: target.scene,
            x: target.x,
            y: target.y - 0.25*target.config.health.banner.lift,
            offset: {x: 0, y: -target.config.health.banner.lift},
            duration: 3000,
            text: "BOOM",
            text_config: {
                font: "bold 40px Monospace",
                fill: "#ffffff",
            },
        });
    }
}
// Levels //////////////////////////////////////////////////////////////////////
class Level1 {
    constructor() {
        this.turn_idx = 0;
        this.level_id = 1;        
        this.win_kills = 5;                
    }
    set_build_constraints(shop_board, build_board) {
        const config = get_config();
        const scene = shop_board.board.scene;
        
        const shop_board_place_command = ({X, Y, command_id}) => {
            shop_board.place_command({
                X: X,
                Y: Y,
                command: new Command({
                    scene: scene,
                    game_board: null,
                    command_id: command_id,
                    command_config: config.commands[command_id],
                }),
            });
            shop_board.place_drag({
                X: X,
                Y: Y,
                drag: new CommandDrag({
                    scene: scene,
                    controller_board: build_board,
                    command_config: config.command_drags[command_id],
                }),
            });
        };        
        const build_board_place_command = ({X, Y, command_id}) => {
            build_board.place_command({
                X: X,
                Y: Y,
                command: new Command({
                    scene: scene,
                    game_board: null, // TODO: Huh?
                    command_id: command_id,
                    command_config: config.commands[command_id],
                }),
            });
        };

        build_board_place_command({X: 1, Y: 2, command_id: "step_left"});
        build_board_place_command({X: 0, Y: 2, command_id: "step_left"});
        build_board_place_command({X: 3, Y: 2, command_id: "step_right"});
        build_board_place_command({X: 4, Y: 2, command_id: "step_right"});
        build_board_place_command({X: 2, Y: 1, command_id: "step_forward"});
        build_board_place_command({X: 2, Y: 0, command_id: "step_forward"});
        //build_board_place_command({X: 2, Y: 3, command_id: "step_backward"});
        //build_board_place_command({X: 2, Y: 4, command_id: "step_backward"});

        build_board_place_command({X: 2, Y: 2, command_id: "hit_forward"});
        build_board_place_command({X: 1, Y: 1, command_id: "hit_forward"});
        build_board_place_command({X: 3, Y: 1, command_id: "hit_forward"});
        //build_board_place_command({X: 1, Y: 3, command_id: "hit_forward"});
        //build_board_place_command({X: 3, Y: 3, command_id: "hit_forward"});
        
        build_board.board.foreach((X,Y) => {
            build_board.unlocked[Y][X] = false;
        });
    }
    make_turn(game_board) {
        this.turn_idx += 1;        
        //if (this.turn_idx % 2 == 0) {return;}

        const config = get_config(); // TODO: Move out?

        const ncols = game_board.board.config.ncols;        
        const enemy = Enemy.basic({
            scene: game_board.board.scene,
            dir: -1,
            agent_config: config.enemies.basic,
        });

        let offset = 1;
        if (this.turn_idx%2 == 0) {offset *= -1;}

        enemy.tween_alpha({
            from: 0.0,
            to: 1,
        });
        game_board.insert({
            X: Math.floor(ncols/2) + offset,
            Y: 0,
            entity: enemy,
        });
    }
}
class Level2 {
    constructor() {
        this.turn_idx = 0;
        this.level_id = 2;

        this.win_kills = 5;
    }
    set_build_constraints(shop_board, build_board) {
        const config = get_config();
        const scene = shop_board.board.scene;
        const shop_board_place_command = ({X, Y, command_id}) => {
            shop_board.place_command({
                X: X,
                Y: Y,
                command: new Command({
                    scene: scene,
                    game_board: null,
                    command_id: command_id,
                    command_config: config.commands[command_id],
                }),
            });
            shop_board.place_drag({
                X: X,
                Y: Y,
                drag: new CommandDrag({
                    scene: scene,
                    controller_board: build_board,
                    command_config: config.command_drags[command_id],
                }),
            });
        };        
        const build_board_place_command = ({X, Y, command_id}) => {
            build_board.place_command({
                X: X,
                Y: Y,
                command: new Command({
                    scene: scene,
                    game_board: null, // TODO: Huh?
                    command_id: command_id,
                    command_config: config.commands[command_id],
                }),
            });
        };

        build_board_place_command({X: 1, Y: 2, command_id: "turn_left"});
        build_board_place_command({X: 0, Y: 2, command_id: "turn_left"});
        build_board_place_command({X: 3, Y: 2, command_id: "turn_right"});
        build_board_place_command({X: 4, Y: 2, command_id: "turn_right"});
        build_board_place_command({X: 2, Y: 1, command_id: "step_forward"});
        build_board_place_command({X: 2, Y: 0, command_id: "step_forward"});
        //build_board_place_command({X: 2, Y: 3, command_id: "step_backward"});
        //build_board_place_command({X: 2, Y: 4, command_id: "step_backward"});

        build_board_place_command({X: 2, Y: 2, command_id: "hit_forward"});
        build_board_place_command({X: 1, Y: 1, command_id: "hit_forward"});
        build_board_place_command({X: 3, Y: 1, command_id: "hit_forward"});
        //build_board_place_command({X: 1, Y: 3, command_id: "hit_forward"});
        //build_board_place_command({X: 3, Y: 3, command_id: "hit_forward"});

        build_board.board.foreach((X,Y) => {
            build_board.unlocked[Y][X] = false;
        });
    }
    make_turn(game_board) {
        this.turn_idx += 1;        
        //if (this.turn_idx % 2 == 0) {return;}

        const config = get_config(); // TODO: Move out?

        const ncols = game_board.board.config.ncols;        
        const enemy = Enemy.basic({
            scene: game_board.board.scene,
            dir: -1,
            agent_config: config.enemies.basic,
        });

        let offset = 1;
        if (this.turn_idx%2 == 0) {offset *= -1;}

        enemy.tween_alpha({
            from: 0.0,
            to: 1,
        });
        game_board.insert({
            X: Math.floor(ncols/2) + offset,
            Y: 0,
            entity: enemy,
        });
    }
}
class Level3 {
    constructor() {
        this.turn_idx = 0;
        this.level_id = 3;

        this.win_kills = 10;
    }
    set_build_constraints(shop_board, build_board) {
        const config = get_config();
        const scene = shop_board.board.scene;
        const shop_board_place_command = ({X, Y, command_id}) => {
            shop_board.place_command({
                X: X,
                Y: Y,
                command: new Command({
                    scene: scene,
                    game_board: null,
                    command_id: command_id,
                    command_config: config.commands[command_id],
                }),
            });
            shop_board.place_drag({
                X: X,
                Y: Y,
                drag: new CommandDrag({
                    scene: scene,
                    controller_board: build_board,
                    command_config: config.command_drags[command_id],
                }),
            });
        };        
        const build_board_place_command = ({X, Y, command_id}) => {
            build_board.place_command({
                X: X,
                Y: Y,
                command: new Command({
                    scene: scene,
                    game_board: null, // TODO: Huh?
                    command_id: command_id,
                    command_config: config.commands[command_id],
                }),
            });
        };

        build_board_place_command({X: 2, Y: 1, command_id: "step_forward"});
        build_board_place_command({X: 2, Y: 2, command_id: "step_forward"});

        build_board.unlocked[1][2] = false;
        build_board.unlocked[2][2] = false;

        shop_board_place_command({X: 0, Y: 0, command_id: "step_forward"});
        shop_board_place_command({X: 1, Y: 0, command_id: "step_backward"});
        shop_board_place_command({X: 2, Y: 0, command_id: "turn_left"});
        shop_board_place_command({X: 3, Y: 0, command_id: "turn_right"});
        shop_board_place_command({X: 4, Y: 0, command_id: "step_left"});
        shop_board_place_command({X: 5, Y: 0, command_id: "step_right"});
        shop_board_place_command({X: 0, Y: 1, command_id: "hit_forward"});
        shop_board_place_command({X: 1, Y: 1, command_id: "explode_self"});
        shop_board_place_command({X: 2, Y: 1, command_id: "dash_forward"});
    }
    make_turn(game_board) {
        this.turn_idx += 1;
        const config = get_config(); // TODO: Move out?

        const ncols = game_board.board.config.ncols;
        const col = Math.floor(Math.random()*(ncols-0.0001));
        
        const enemy_data = {
            0: {type: Enemy.basic, config: config.enemies.basic},
            1: {type: Enemy.fast, config: config.enemies.fast},
            2: {type: Enemy.slow, config: config.enemies.slow},
        }[Math.floor(Math.random()*3 - 0.0001)];

        const enemy = enemy_data.type({
            scene: game_board.board.scene,
            dir: -1,
            agent_config: enemy_data.config,
        });

        enemy.tween_alpha({
            from: 0.0,
            to: 1,
        });
        game_board.insert({
            X: col,
            Y: 0,
            entity: enemy,
        });
    }
}
// Commands ////////////////////////////////////////////////////////////////////
const PlayerCommands = {
    step_forward: (game_board) => () => {
        game_board.player.step({
            F: 1,
            R: 0,
        });
        game_board.player.modify_resource("ultimate", 1);
    },
    step_backward: (game_board) => () => {
        game_board.player.step({
            F: -1,
            R: 0,
        });
        game_board.player.modify_resource("ultimate", 1);
    },
    hit_forward: (game_board) => () => {
        game_board.player.hit({
            F: 1,
            R: 0,
            dmg: 1,
        });
        if (game_board.player.FR2XY({F:1, R: 0}) != null) {
            game_board.player.modify_resource("ultimate", 2);
        }
    },
    step_right: (game_board) => () => {
        game_board.player.step({
            F: 0,
            R: 1,
        });
        game_board.player.modify_resource("ultimate", 1);        
    },
    step_left: (game_board) => () => {
        game_board.player.step({
            F: 0,
            R: -1,
        });
        game_board.player.modify_resource("ultimate", 1);
    },
    turn_left: (game_board) => () => {
        game_board.player.turn({
            dir: 1,
        });
        game_board.player.modify_resource("ultimate", 1);
    },
    turn_right: (game_board) => () => {
        game_board.player.turn({
            dir: -1,
        });
        game_board.player.modify_resource("ultimate", 1);
    },
    explode_self: (game_board) => () => {
        if (game_board.player.get_resource("ultimate") < 10) {return;} // TODO: Hardcoded
        game_board.player.explode({
            dmg: 2, // TODO: Put into config
        });
        game_board.player.modify_resource("ultimate", -10);
    },
    dash_forward: (game_board) => () => {
        const landing_pos = game_board.player.FR2XY({F:2, R:0});

        if (!game_board.board.contains(landing_pos)) {return;}
        if (game_board.player.get_resource("ultimate") < 5) {return;} // TODO: Hardcoded
        if (game_board.entities[landing_pos.Y][landing_pos.X] != null) {return;} // TODO: Hardcoded
        
        game_board.player.hit({
            F: 1,
            R: 0,
            dmg: 5,
        });
        game_board.player.step({
            F: 2,
            R: 0,
        });
        game_board.player.modify_resource("ultimate", -5);
    },
};
class Command extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, game_board, command_id, command_config}) {
        super(scene, x, y, command_config.img);
        // this.scene = scene;
                
        this.config = command_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;
        this.state = new VisState({
            sprite: this,
            state_map: command_config.state_map,
            init_state: command_config.init_state,
            tint_time: command_config.time.tint,
            scale_time: command_config.time.scale,
        });

        this.game_board = game_board;
        this.command_id = command_id;

        this.execute = PlayerCommands[this.command_id](game_board);
                
        this.setDepth(this.config.depth);

        scene.add.existing(this);
    }
    execute() {
        
    }
}
class CommandDrag extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, controller_board, command_config}) {
        super(scene, x, y, command_config.img);

        //this.scene = scene;

        this.X = null;
        this.Y = null;
                
        this.config = command_config;
        this.controller_board = controller_board;
        this.shop_board = null;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;

        this.tint = this.config.tint;

        this.setDepth(this.config.depth);
        
        scene.add.existing(this);
    }
    appear_at(command) {
        this.shop_board.disable_board();
        
        // this.controller_board.disable_board(); // TODO: Should not remove?
        this.controller_board.reset_board();
        
        let on_tile_click = (X,Y) => {this.on_tile_click(X,Y);} // Need closure!
        this.controller_board.event_emitter.once("click", on_tile_click);
        
        let controller = this.controller_board.controller;
        if (controller != undefined) { // TODO: Unethical?
            controller.tween_alpha({from: 1, to: controller.config.hover.alpha});        
            controller.lock_faded = true;        
        }
        
        this.tween_alpha({from: 0, to: 1});

        this.scene.tweens.add({
            targets: this,
            scale: {from: command.scale, to: this.scale},
            ease: "Quint.Out",
            duration: this.config.time.scale,
        }); // scale

        const t = { val: 0.0 };
        this.scene.tweens.add({
            targets: t,
            val: 1,
            duration: this.config.time.fade,
            ease: "Quint.Out",
            onUpdate: () => {
                this.x = (1-t.val)*command.x + t.val*this.scene.input.x;
                this.y = (1-t.val)*command.y + t.val*this.scene.input.y;                
            },
            onComplete: () => {
                const follow_mouse = (pointer) => {
                    this.x = pointer.x;
                    this.y = pointer.y;
                };
                this.scene.input.on("pointermove", follow_mouse);                
                this.scene.input.once("pointerup", (pointer) => {
                    this.shop_board.reset_board();
                    this.controller_board.disable_board();
                    this.scene.input.off("pointermove", follow_mouse);
                    this.controller_board.event_emitter.off("click", on_tile_click);
                    this.tween_alpha({from: 1, to: 0});

                    if (controller == undefined) {return;} // TODO: Unethical?
                    controller.tween_alpha({from: controller.alpha, to: 1});
                    controller.lock_faded = false;                    
                    this.controller_board.reset_board();
                });
            }
        });
    }
    on_tile_click(X,Y) {
        this.controller_board.remove_command(X,Y);
        
        let shop_command = this.shop_board.commands[this.Y][this.X];
        let new_command = new Command({
            scene: shop_command.scene,
            game_board: shop_command.game_board,
            command_id: shop_command.command_id,
            command_config: shop_command.config,
        });
        new_command.state.set("hover");
        this.controller_board.place_command({
            X: X,
            Y: Y,
            command: new_command,
        });
        this.controller_board.disable_board();

        let tile = this.controller_board.board.tiles[Y][X];
        
        const t = { val: 0.0 };        
        let pos = {
            x: this.scene.input.x,
            y: this.scene.input.y,
        };
        this.scene.tweens.add({
            targets: t,
            val: 1,
            duration: this.config.time.fade,
            ease: "Quint.Out",
            onUpdate: () => {
                this.x = (1-t.val)*pos.x + t.val*tile.x;
                this.y = (1-t.val)*pos.y + t.val*tile.y;
            },
        }); // pos

        this.scene.tweens.add({
            targets: this,
            scale: {to: this.scale, to: shop_command.scale},
            ease: "Quint.Out",
            duration: this.config.time.scale,
        }); // scale
    }
}
Object.assign(CommandDrag.prototype, TweenMethods);
// Run /////////////////////////////////////////////////////////////////////////
const GLOBAL_CONFIG = get_config();
var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: GLOBAL_CONFIG.window.width,
    height: GLOBAL_CONFIG.window.height,
    backgroundColor: GLOBAL_CONFIG.window.color,
    scene: [LoadingScene, LevelScene, BuildScene, GameScene],
});
