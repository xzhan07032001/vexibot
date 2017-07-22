const app = require('./app');

const getTeamId = (message, args) => args ? args.split(' ')[0].toUpperCase() : message.member.nickname.split(' | ', 2)[1];

const validTeamId = teamId => /^([0-9]{1,5}[A-Z]?|[A-Z]{2,6}[0-9]{0,2})$/.test(teamId);

const getTeam = teamId => app.db.collection('teams').findOne({_id: teamId});

module.exports = {
	getTeamId: getTeamId,
	validTeamId: validTeamId,
	getTeam: getTeam
};