export enum ContactType {
    email = 'email',
    linkedin = 'linkedin',
    github = 'github'
}

export class Contact {
    type: ContactType;
    text: string;
    constructor(type: ContactType,
        text: string) {
        this.type = type;
        this.text = text;
    }
}
