import model from 'src/models';
import helpers from 'src/helpers';
import { controllerConstants } from 'src/config/constants';
import { controllerLog, logStylers } from 'src/helpers/logHelpers';


const { board } = model;
const contextName = controllerConstants.board.CONTEXTNAME;
const boardControllerLog = controllerLog(contextName);

const addBoard = (req, res) => {
    const boardData = {
        board_id: req.body.board_id,
        board_name: req.body.board_name,
        board_user_token: req.body.board_user_token,
        added_timestamp: req.body.added_timestamp,
    };

    return board.create(boardData)
                .then(boardDataSynced => {
                    boardControllerLog(logStylers.genericSuccess('Board created successfully. Values:\n'), logStylers.values(JSON.stringify(boardDataSynced)));

                    return res.status(201)
                              .send(helpers.controllerHelpers.afterCreateSuccess(boardDataSynced, contextName, res.locals.cacheHandler))
                }).catch(error => {
                    boardControllerLog(logStylers.genericError('Error creating board. Message: '), logStylers.values(error.message), '\n', error.stack);

                    return res.status(401)
                              .send(helpers.responseHelpers.addFailure(contextName, error.message))
                });
}

const getAllBoards = (req, res) => {
    return board.findAll()
                .then(allDBoards => {
                    boardControllerLog(logStylers.genericSuccess('Boards fetched successfully. Values:\n'), logStylers.values(JSON.stringify(allDBoards)));

                    return res.status(200)
                              .send(helpers.controllerHelpers.afterFetchSuccess(allDBoards, contextName, res.locals.cacheHandler))
                }).catch(error => {
                    boardControllerLog(logStylers.genericError('Error fetching boards: '), logStylers.values(error.message), '\n', error.stack);

                    return res.status(400)
                              .send(helpers.responseHelpers.fetchFailure(contextName, error.message))
                });
}

const updateBoard = (req, res) => {
    const boardIdToUpdate = req.params.boardId;
    const query = {
        fields: Object.keys(req.body),
        returning: true,
        where: {
            id: boardIdToUpdate,
        },
    };

    req.body.updated_timestamp = new Date().toISOString();

    return board.update(req.body, query)
                .then(boardDataUpdateInformation => {
                    const [numberOfRowsAffected, updatedBoardData] = boardDataUpdateInformation;

                    //NOTE: Since this is allowed to update only a single board through the route, the updated board data will always contain a single changed row thus we are using updatedDeviceData[0];
                    boardControllerLog(`${logStylers.genericSuccess('Board successfully updated! ')}, Old: ${logStylers.values(JSON.stringify(req.body))} New: ${logStylers.values(JSON.stringify(updatedBoardData[0]))}`);

                    return res.status(202)
                              .send(helpers.controllerHelpers.afterUpdateSuccess(updatedBoardData[0], contextName, res.locals.cacheHandler, 'update'))
                }).catch(error => {
                    boardControllerLog(logStylers.genericError('Error updating board: '), logStylers.values(JSON.stringify(baordIdToUpdate)), logStylers.values(error.message), error.stack);

                    return res.status(402)
                              .send(helpers.responseHelpers.updateFailure(contextName, error.message))
                })
}

const deleteBoard = (req, res) => {
    const boardIdToDelete = req.params.boardId;

    const contextObject = {
        id: boardIdToDelete,
    };

    const query = {
        where: contextObject,
    };

    return board.destroy(query)
                .then(() => {
                    boardControllerLog(logStylers.genericSuccess('Board successfully deleted! ID: '), logStylers.values(boardIdToDelete));

                    return res.status(203)
                              .send(helpers.controllerHelpers.afterUpdateSuccess(null, contextName, res.locals.cacheHandler, 'delete'))
                })
                .catch((error) => {
                    boardControllerLog(logStylers.genericError(`Error deleting board. ID: ${logStylers.values(boardIdToDelete)} `), logStylers.values(error.message), error.stack);

                    return res.status(403)
                              .send(helpers.responseHelpers.deleteFailure(contextName, error.message))
                });
}

export default {
    addBoard,
    getAllBoards,
    updateBoard,
    deleteBoard,
}
