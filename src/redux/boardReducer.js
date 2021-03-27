
const PRESENT_BOARDS = "PRESENT_BOARDS"
const INITAPP = "INITAPP"

let initialState = {
  initApp: false,
  PresentBoards: {
    boards: []
  }
}

const Board = (state = initialState, action) => {
  switch (action.type) {
    case PRESENT_BOARDS: {
      return {...state, PresentBoards: action.PresentBoards}
    }
    case INITAPP: {
      return {...state, initApp: action.initApp}
    }
    default: return state
  }
}

export default Board

const presentBoards = (PresentBoards) => {return {type: PRESENT_BOARDS, PresentBoards}}
const init = (initApp) => {return {type: INITAPP, initApp}}


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