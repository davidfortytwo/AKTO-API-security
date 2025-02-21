import request from '@/util/request'

export default {
    inviteUsers(apiSpec) {
        return request({
            url: '/api/inviteUsers',
            method: 'post',
            data: { 
                inviteeName: apiSpec.inviteeName,
                inviteeEmail: apiSpec.inviteeEmail,
                websiteHostName: apiSpec.websiteHostName,

            }
        })
    },
    getTeamData() {
        return request({
            url: '/api/getTeamData',
            method: 'post',
            data: {}
        }).then((resp) => {
            return resp
        })
    },
    removeUser (email) {
        return request({
            url: '/api/removeUser',
            method: 'post',
            data: {
                email: email
            }
        }).then((resp) => {
            return resp
        })
    },
    health() {
        return request({
            url: '/api/health',
            method: 'post',
            data: {}
        }).then((resp) => {
            return resp
        })
    },
    fetchPostmanWorkspaces(api_key) {
        return request({
            url: '/api/fetchPostmanWorkspaces',
            method: 'post',
            data: {api_key}
        }).then((resp) => {
            return resp
        })
    },
    addOrUpdatePostmanCred(api_key, workspace_id) {
        return request({
            url: '/api/addOrUpdatePostmanCred',
            method: 'post',
            data: {api_key,workspace_id}
        }).then((resp) => {
            return resp
        })
    },
    getPostmanCredentials() {
        return request({
            url: '/api/getPostmanCredential',
            method: 'post',
            data: {}
        }).then((resp) => {
            return resp
        })
    },
    addApiToken(tokenUtility) {
        return request({
            url: '/api/addApiToken',
            method: 'post',
            data: {tokenUtility}
        }).then((resp) => {
            return resp
        })
    },
    deleteApiToken(apiTokenId) {
        return request({
            url: '/api/deleteApiToken',
            method: 'post',
            data: {apiTokenId}
        }).then((resp) => {
            return resp
        })
    },
    fetchApiTokens() {
        return request({
            url: '/api/fetchApiTokens',
            method: 'post',
            data: {}
        }).then((resp) => {
            return resp
        })
    },
    addSlackWebhook(webhookUrl) {
        return request({
            url: '/api/addSlackWebhook',
            method: 'post',
            data: {webhookUrl}
        })
    },
    deleteSlackWebhook(apiTokenId) {
        return request({
            url: '/api/deleteSlackWebhook',
            method: 'post',
            data: {apiTokenId}
        })
    },
    toggleRedactFeature(redactPayload) {
        return request({
            url: '/api/toggleRedactFeature',
            method: 'post',
            data: {
                redactPayload
            }
        }).then((resp) => {
            return resp
        })
    },

    updateMergeAsyncOutside() {
        return request({
            url: '/api/updateMergeAsyncOutside',
            method: 'post',
            data: {
                
            }
        });
    },

    toggleNewMergingEnabled(newMergingEnabled) {
        return request({
            url: '/api/toggleNewMergingEnabled',
            method: 'post',
            data: {
                newMergingEnabled
            }
        });
    },

    updateSetupType(setupType) {
        return request({
            url: '/api/updateSetupType',
            method: 'post',
            data: {
                setupType
            }
        }).then((resp) => {
            return resp
        })
    },

    updateGlobalRateLimit(globalRateLimit) {
        return request({
            url: '/api/updateGlobalRateLimit',
            method: 'post',
            data: {
                globalRateLimit
            }
        })
    },

    fetchAdminSettings() {
        return request({
            url: '/api/fetchAdminSettings',
            method: 'post',
            data: {}
        }).then((resp) => {
            return resp
        })
    },
    takeUpdate() {
        return request({
            url: '/api/takeUpdate',
            method: 'post',
            data: {}
        })
    },
    fetchLogs(logGroupName, startTime, endTime, limit, filterPattern) {
        return request({
            url: '/api/fetchLogs',
            method: 'post',
            data: {
                logGroupName,
                startTime,
                endTime,
                limit,
                filterPattern
            }
        })
    },
    fetchLogsFromDb(startTime, endTime, logDb) {
        return request({
            url: '/api/fetchLogsFromDb',
            method: 'post',
            data: {
                startTime,
                endTime,
                logDb
            }
        })
    },
    fetchUserLastLoginTs() {
        return request({
            url: '/api/fetchUserLastLoginTs',
            method: 'post',
            data: {}
        }).then((resp) => {
            return resp
        })
    },
    fetchAktoGptConfig(){
        return request({
            url: '/api/fetchAktoGptConfig',
            method: 'post',
            data: {
                "apiCollectionId": -1
            }
        })
    },
    saveAktoGptConfig(aktoConfigList){
        return request({
            url: '/api/saveAktoGptConfig',
            method: 'post',
            data: {
                "currentState": aktoConfigList
            }
        })
    },

    resetAllCustomAuthTypes() {
        return request({
            url: '/api/resetAllCustomAuthTypes',
            method: 'post',
            data: {}
        })
    }

}