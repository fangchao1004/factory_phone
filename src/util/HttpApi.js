import Axios from 'axios';

const Testuri1 = 'http://127.0.0.1:3009/' ///本地服务器
const Testuri2 = 'http://hefeixiaomu.com:3009/'///小木服务器数据库
const Testuri3 = 'http://192.168.3.171:3009/' ///本地x服务器
const Testuri4 = 'http://192.168.3.119:3009/' ///本地f服务器
const Testuri = Testuri2;
class HttpApi {
    /**
     * 通过账号密码登录
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static loginByUserInfo(params, f1, f2) {
        Axios.post(Testuri + 'loginByUserInfo', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 通过NFC登录
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static loginByNFC(params, f1, f2) {
        Axios.post(Testuri + 'loginByNFC', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 通过NFC获取设备信息
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static getDeviceInfoByNFC(params, f1, f2) {
        Axios.post(Testuri + 'getDeviceInfoByNFC', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 通过设备的类型获取对应的模版
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static getDeviceSampleByTypeId(params, f1, f2) {
        Axios.post(Testuri + 'find_sample', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 上传设备记录表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static upLoadDeviceRecord(params, f1, f2) {
        Axios.post(Testuri + 'insert_record', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }

    /**
     * 更新设备的状态 正常-故障-待检  等
     * @param {*} query 
     * @param {*} update 
     * @param {*} f1 
     * @param {*} f2 
     */
    static updateDeviceStatus(query, update, f1, f2) {
        Axios.post(Testuri + 'update_device', { query, update: update.$set }).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 获取用户表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static getUserInfo(params, f1, f2) {
        Axios.post(Testuri + 'find_user', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 获取设备表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static getDeviceInfo(params, f1, f2) {
        Axios.post(Testuri + 'find_device', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 获取设备类型表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static getDeviceTypeInfo(params, f1, f2) {
        Axios.post(Testuri + 'find_device_type', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 获取区域表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static getAreaInfo(params, f1, f2) {
        Axios.post(Testuri + 'find_area', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 获取NFC表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static getNFCInfo(params, f1, f2) {
        Axios.post(Testuri + 'find_nfc', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 插入NFC表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static insertNFCInfo(params, f1, f2) {
        Axios.post(Testuri + 'insert_nfc', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 移除NFC表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static removeNFCInfo(params, f1, f2) {
        Axios.post(Testuri + 'remove_nfc', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 插入设备表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static insertDeviceInfo(params, f1, f2) {
        Axios.post(Testuri + 'insert_device', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 获取record记录表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static getRecordInfo(params, f1, f2) {
        Axios.post(Testuri + 'find_record', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 获取Level表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static getLevelInfo(params, f1, f2) {
        Axios.post(Testuri + 'find_level', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
    /**
     * 报告其他故障，插入problems表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static uploadProblems(params, f1, f2) {
        Axios.post(Testuri + 'insert_problem', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }

    /**
     * 报告bugs，插入bugs表
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static uploadBugs(params, f1, f2) {
        Axios.post(Testuri + 'insert_bug', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }

    /**
     * 查询bugs
     * @param {*} params 
     * @param {*} f1 
     * @param {*} f2 
     */
    static getBugs(params, f1, f2) {
        Axios.post(Testuri + 'find_bug', params).then(res => {
            if (f1) { f1(res) }
        }).catch(res => {
            if (f2) { f2(res) }
        })
    }
}

export default HttpApi;