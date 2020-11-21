class DataItem {
    id: string
    title: number
    content: string
    createTime: string

    constructor(
        id: string,
        title: number,
        content: string,
        createTime: string
    ) {
        this.id = id
        this.title = title
        this.content = content
        this.createTime = createTime
    }

    dateFormat(timeStr: string): string {
        let date = new Date()
        let prefix = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()}`
        let suffix = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
        return prefix + suffix
    }

}
export default DataItem