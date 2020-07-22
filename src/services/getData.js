import fetch from '../config/fetch'

/**
 *获取单位信息
 */
export const units = () => fetch('/unit/list');

/**
 * 获取字典信息
 */
export const dictionaries = () => fetch('/unit/dictionaries');
