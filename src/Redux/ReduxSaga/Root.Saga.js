

export function* rootSaga () {
    yield all ([loginSaga])
}