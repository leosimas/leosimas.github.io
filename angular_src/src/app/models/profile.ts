import { Contact } from './contact';
import { Certification } from './certification';
import { Graduation } from './graduation';
import { Job } from './job';
import { Skill } from './skill';

export class Profile {
    pageTitle: string;
    name: string;
    fullName: string;
    intro: string;
    title: string;
    contacts: Array<Contact>;
    certifications: Array<Certification>;
    formation: Array<Graduation>;
    roles: Array<{ title: string, text: string }>;
    jobs: Array<Job>;
    skills: Array<Skill>;
}
