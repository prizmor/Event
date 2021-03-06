import {get, set, remove} from "./loaclStorage"


const PRESENT_BOARDS = "PRESENT_BOARDS"
const INITAPP = "INITAPP"
const SET_BOARD = "SET_BOARD"

let initialState = {
    initApp: false,
    PresentBoards: {
        boards: []
    },
    board: {}
}

const Board = (state = initialState, action) => {
    switch (action.type) {
        case PRESENT_BOARDS: {
            return {...state, PresentBoards: action.PresentBoards}
        }
        case INITAPP: {
            return {...state, initApp: action.initApp}
        }
        case SET_BOARD: {
            return {...state, board: action.board}
        }
        default:
            return state
    }
}

export default Board

const presentBoards = (PresentBoards) => {
    return {type: PRESENT_BOARDS, PresentBoards}
}
const init = (initApp) => {
    return {type: INITAPP, initApp}
}
const setBoard = (board) => {
    return {type: SET_BOARD, board}
}


export let SetBoard = (name) => (dispatch) => {
    let board = get(name)
    dispatch(setBoard(board))
}

export let createBoard = (data) => (dispatch) => {
    let PresentBoards = get('PresentBoards');
    PresentBoards.countBoards++
    let templatePresentBoard = {
        name: data.name,
        color: data.color,
        id: PresentBoards.countBoards
    }
    PresentBoards.boards.push(templatePresentBoard)
    set('PresentBoards', PresentBoards);
    let templateBoard = {
        name: data.name,
        id: PresentBoards.boards[PresentBoards.boards.length - 1].id,
        color: data.color,
        countStages: 0,
        stages: {
            "test-1": {
                task: [
                    {
                        id: "1",
                        text: "Создать настройки задания",
                        description: "",
                        time: {},
                        checkList: {
                            completed: 0,
                            progress: 0,
                            items:[]
                        },
                        tags: []
                    },
                    {
                        id: "2",
                        text: "Равным образом консультация с",
                        description: "",
                        time: {},
                        checkList: {
                            completed: 0,
                            progress: 0,
                            items:[{
                                performed: false,
                                text: "Значимость этих проблем"
                            },
                                {
                                    performed: false,
                                    text: "что дальнейшее развитие"
                                },
                                {
                                    performed: false,
                                    text: "Равным образом"
                                }]
                        },
                        tags: []
                    },
                    {
                        id: "3",
                        text: "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм",
                        description: "",
                        time: {},
                        checkList: {
                            completed: 0,
                            progress: 0,
                            items:[{
                                performed: false,
                                text: "Значимость этих проблем"
                            },
                                {
                                    performed: false,
                                    text: "что дальнейшее развитие"
                                },
                                {
                                    performed: false,
                                    text: "Равным образом"
                                }]
                        },
                        tags: []
                    }
                ]
            },
            "test-2": {
                task: [
                    {
                        id: "4",
                        text: "Дорогие друзья, начало повседневной работы по формированию позиции позволяет выполнить важнейшие задания по разработке направлений прогрессивного развития!",
                        description: "",
                        time: {},
                        checkList: {
                            completed: 0,
                            progress: 0,
                            items:[{
                                performed: false,
                                text: "Значимость этих проблем"
                            },
                                {
                                    performed: false,
                                    text: "что дальнейшее развитие"
                                },
                                {
                                    performed: false,
                                    text: "Равным образом"
                                }]
                        },
                        tags: []
                    },
                    {
                        id: "5",
                        text: "Практический опыт показывает, что курс на социально-ориентированный национальный проект обеспечивает широкому кругу специалистов участие в формировании дальнейших направлений развития проекта",
                        description: "",
                        time: {},
                        checkList: {
                            completed: 0,
                            progress: 0,
                            items:[{
                                performed: false,
                                text: "Значимость этих проблем"
                            },
                                {
                                    performed: false,
                                    text: "что дальнейшее развитие"
                                },
                                {
                                    performed: false,
                                    text: "Равным образом"
                                }]
                        },
                        tags: []
                    },
                    {
                        id: "6",
                        text: "Задача организации, в особенности же новая модель организационной деятельности в значительной степени обуславливает создание модели развития",
                        description: "",
                        time: {},
                        checkList: {
                            completed: 0,
                            progress: 0,
                            items:[{
                                performed: false,
                                text: "Значимость этих проблем"
                            },
                                {
                                    performed: false,
                                    text: "что дальнейшее развитие"
                                },
                                {
                                    performed: false,
                                    text: "Равным образом"
                                }]
                        },
                        tags: [
                            {
                                color: "green",
                                text: "срочно"
                            },
                            {
                                color: "green",
                                text: "очень срочно"
                            }
                        ]
                    }
                ]
            }
        }
    }
    set(data.name, templateBoard);
    dispatch(presentBoards(get('PresentBoards')))
}

export let initApp = () => (dispatch) => {
    let PresentBoards = get('PresentBoards')
    if (PresentBoards === null) {
        let initData = {
            countBoards: 0,
            boards: []
        }
        set('PresentBoards', initData);
    }
    dispatch(presentBoards(get('PresentBoards')))
    dispatch(init(true))
}

export let setSettings = (value, name) => (dispatch) => {
    let Board = get(name)
    Board.color = value.color
    Board.name = value.name
    remove(name)
    set(value.name, Board);
    let PresentBoards = get('PresentBoards');
    PresentBoards.boards[Board.id - 1].name = value.name
    PresentBoards.boards[Board.id - 1].color = value.color
    set('PresentBoards', PresentBoards);
    dispatch(presentBoards(get('PresentBoards')))
}

export let setDescription = (board, column, index, text) => (dispatch) => {
    let Board = get(board.name)
    Board.stages[column].task[index].description = text
    set(board.name, Board);
    dispatch(setBoard(Board))
}

export let setTag = (board, column, index, tag) => (dispatch) => {
    let Board = get(board.name)
    Board.stages[column].task[index].tags.push(tag)
    set(board.name, Board);
    dispatch(setBoard(Board))
}

export let deleteTag = (board, column, index, indexTag) => (dispatch) => {
    let Board = get(board.name)
    Board.stages[column].task[index].tags.splice(indexTag, 1)
    set(board.name, Board);
    dispatch(setBoard(Board))
}

export let setTime = (board, column, index, time) => (dispatch) => {
    let Board = get(board.name)
    Board.stages[column].task[index].time = time
    set(board.name, Board);
    dispatch(setBoard(Board))
}

export let deleteItemCheckList = (board, column, index, indexCheckList) => (dispatch) => {
    let Board = get(board.name)
    Board.stages[column].task[index].checkList.items.splice(indexCheckList, 1)
    set(board.name, Board);
    dispatch(setBoard(Board))
}

export let setItemCheckList = (board, column, index, text) => (dispatch) => {
    text = {
        text: text,
        performed: false
    }
    let Board = get(board.name)
    Board.stages[column].task[index].checkList.items.push(text)
    set(board.name, Board);
    dispatch(setBoard(Board))
}

export let actionCheckList = (board, column, index, indexItemsCheckList, performed) => (dispatch) => {
    let Board = get(board.name)
    Board.stages[column].task[index].checkList.items[indexItemsCheckList].performed = performed
    if (performed) {
        Board.stages[column].task[index].checkList.completed++
    } else{
        Board.stages[column].task[index].checkList.completed--
    }
    Board.stages[column].task[index].checkList.progress = (100/Board.stages[column].task[index].checkList.items.length) * Board.stages[column].task[index].checkList.completed
    set(board.name, Board);
    dispatch(setBoard(Board))
}