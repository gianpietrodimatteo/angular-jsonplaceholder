export class RootObject {
    userId: number;
    id: number;
    title: string;
    body: string;

    constructor(data?: any) {
        this.userId = data.userId;
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;

    }
}
