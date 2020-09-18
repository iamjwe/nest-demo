import { createParamDecorator } from '@nestjs/common';

// 聚合请求参数装饰器 
export const Param = createParamDecorator((data, req) => {
    const param = { ...req.args[0].query, ...req.args[0].body, ...req.args[0].param };
    return data ? param[data] : param;
});