export class Certification {
    title: string;
    description: string = null;
    iconClass: string;
    url: string;

    constructor(title: string,
        description: string,
        iconClass: string,
        url: string) {
        this.title = title;
        this.description = description;
        this.iconClass = iconClass;
        this.url = url;
    }
}
