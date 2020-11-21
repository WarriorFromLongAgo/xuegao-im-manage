class RequestV1VO {
    source: string;
    target: string;
    value: any;

    // 默认值 200，''，
    constructor(source: string = '', target: string = '', value: any) {
        this.source = source
        this.target = target
        this.value = value
    }

}

// 对象外抛
export default RequestV1VO