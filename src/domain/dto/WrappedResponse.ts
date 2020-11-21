class WrappedResponse {
    code: number;
    message: string;
    data: any;

    // 默认值 200，''，
    constructor(code: number = 200, message: string = '', data: any) {
        this.code = code
        this.message = message
        this.data = data
    }

}

// 对象外抛
export default WrappedResponse