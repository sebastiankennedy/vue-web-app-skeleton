import request from '@/utils/request'

export default {
    getAuthNotice: function() {
        return request({
            url: '/configs/1',
            method: 'get'
        })
    }
}