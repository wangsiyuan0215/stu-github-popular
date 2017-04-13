// + -------------------------------------
// | utils/index.js
// + -------------------------------------
// | 公共方法库
// + -------------------------------------
// | author: Wangsiyuan @ 2017-04-12
// + -------------------------------------
import { default as _ } from '../config';

/**
 * 请求数据方法
 * @param url
 * @param options
 * @returns {Promise}
 */
export const request = (url, options = {}) => {
    options.credentials = 'include';
    return new Promise( (resolve, reject) => {
        return fetch(url, options)
            .then( response => {
                if(response.status === 200) {
                    return response.json();
                } else {
                    // 网络状态异常处理
                    LOG(response.status, response);
                    throw response;
                }
            })
            .then( json => {
                LOG('json', json);
                if(json.code === _.REQUEST_SUCCESS) {
                    resolve(json.data);
                } else {
                    throw json;
                }
            })
            .catch(e => {
                if (e.status && 'number' === typeof e.status) {
                    LOG(e);
                } else {
                    reject(e);
                }
            });
    });
};


/**
 * inArray
 * @param  {array} arr
 * @param  {int/string} target
 * @return {boolean}
 */
export const inArray = (arr, target) => {
    for(let item in arr) {
        if(arr.hasOwnProperty(item)) {
            if(target === arr[item]) {
                return true;
            }
        }
    }

    return false;
};

/**
 * deepCopy
 * @param  {array} arr
 * @return {array}
 */
export const deepCopy = (arr) => {
    let result = {};

    for(let item in arr) {
        result[item] = "object" === typeof arr[item] ? deepCopy(arr[item]) : arr[item];
    }

    return result;
};

/**
 * transfer price to 0.00
 * @param  {number|string} price -
 * @return {string}
 */
export const transferPrice = (price) => {
    return parseFloat(price).toFixed(2);
};

/**
 * is Array for array
 * @param  {Array}  arr
 * @return boolean
 */

export const isArray = (arr) => {
    if("function" === typeof Array.isArray) {
        return Array.isArray(arr);
    } else {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }
};

/**
 * is empty for String | Array | Object
 * @param  {String | Array | Object}  arg
 * @return boolean
 */

export const isEmpty = (arg) => {
    if("undefined" === typeof arg)
        return true;

    if(isArray(arg))
        return !arg.length;

    if('string' === typeof arg)
        return arg === null || arg === '';

    for(let item in arg) {
        return false;
    }

    return true;
};

