
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
    default: return state
  }
}

export default Board

const presentBoards = (PresentBoards) => {return {type: PRESENT_BOARDS, PresentBoards}}
const init = (initApp) => {return {type: INITAPP, initApp}}
const setBoard = (board) => {return {type: SET_BOARD, board}}


export let SetBoard = (name) => (dispatch) => {
  let board = JSON.parse(localStorage.getItem(name))
  dispatch(setBoard(board))
}

export let createBoard = (data) => (dispatch) => {
  let PresentBoards = JSON.parse(localStorage.getItem('PresentBoards'));
  PresentBoards.countBoards++
  let templatePresentBoard = {
    name: data.name,
    color: data.color,
    id: PresentBoards.countBoards
  }
  PresentBoards.boards.push(templatePresentBoard)
  localStorage.setItem('PresentBoards', JSON.stringify(PresentBoards));
  let templateBoard = {
    name: data.name,
    id: PresentBoards.boards[PresentBoards.boards.length-1].id,
    color: data.color,
    countStages: 0,
    stages:[]
  }
  localStorage.setItem(data.name, JSON.stringify(templateBoard));
  dispatch(presentBoards(JSON.parse(localStorage.getItem('PresentBoards'))))
}

export let initApp = () => (dispatch) => {
  let PresentBoards = localStorage.getItem('PresentBoards')
  if (PresentBoards === null ) {
    let initData = {
      countBoards: 0,
      boards: []
    }
    localStorage.setItem('PresentBoards', JSON.stringify(initData));
  }
  dispatch(presentBoards(JSON.parse(localStorage.getItem('PresentBoards'))))
  dispatch(init(true))
}

export let setSettings = (value, name) => (dispatch) => {
  let Board = JSON.parse(localStorage.getItem(name))
  Board.color = value.color
  Board.name = value.name
  localStorage.removeItem(name)
  localStorage.setItem(value.name, JSON.stringify(Board));
  let PresentBoards = JSON.parse(localStorage.getItem('PresentBoards'));
  PresentBoards.boards[Board.id-1].name = value.name
  PresentBoards.boards[Board.id-1].color = value.color
  localStorage.setItem('PresentBoards', JSON.stringify(PresentBoards));
  dispatch(presentBoards(JSON.parse(localStorage.getItem('PresentBoards'))))
}