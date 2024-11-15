import {Component, TemplateRef, ViewChild} from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import { MatTooltipModule} from "@angular/material/tooltip";
import {MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { MatDividerModule} from "@angular/material/divider";
import {CommonModule} from "@angular/common";

export interface Apps {
  name: string,
  description?: string,
  git?: string;
  website?: string;
  status?: "Progress" | "Article" | "Complete",
  image?: string;
  tools?: string;
  skills?: string;
  role?: string;
  responsibilities?: string[];
  type?: 'Organisation' | 'Self';
}
@Component({
  selector: 'pp-poc',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButton,
    FlexLayoutModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatDividerModule
  ],
  templateUrl: './poc.component.html',
  styleUrl: './poc.component.scss'
})
export class POCComponent {

  currentItem?: Apps;

  @ViewChild('pocSheetItemRef') pocSheetItemRef!: TemplateRef<any>;

  constructor(private matBottomSheet: MatBottomSheet) {
  }
  pocs: Apps[] = [
    {
      name: 'Mobility Business',
      description: 'Mobility Business a.k.a MBIZZ is a CRM tool and available for internal use of Admin, Authorized Resellers to CRUD Operations for Agreements, Accounts, and Contacts with legacy database. This involves purchases, discount parity, and much more',
      role: 'Technical Specialist',
      skills: 'React 18, ANTD, AG-Grid, Git, Typescript, Eslint, SCSS, HTML, Axios, Jest, etc.',
      tools: 'Visual Studio Code, IntelliJ Idea, Github, Postman, iTracker',
      status: 'Progress',
      responsibilities: ['As a Technical Specialisy in MBIZ Product Team Member.', 'Involved in end-to-end development course of this application from scratch.', 'Involved in reshapping the entire UI design structure, such as, upto folder level, configuring typescript, eslint, and jest.', 'Developed intuitive reusable components with zero breakage aligning with the UX Designer.', 'Involved in technical discussions on how we improve the codebase setting standards.', 'Involved in code-reviews, with actively development.']
    },
    {
      name: 'Outplay',
      description: 'OUTPLAY is a CRM tool application that elevates multiple business solutions who seeks for HR & Recruiting, Sales Management, with the prospects and sequences, wherein, chat, emails, sms and dialer multichannel outreach. Apart from this, that also includes several integrations with other CRMs, one such examples are Salesforce and Zoho.',
      role: 'Software Developer',
      skills: 'Angular 9/16, Angular Material, Typescript, Git, HTML, RxJS, CSS, Karma, Jasmine, ng-bootstrap, bootstrap, Utilities, and JSON/HTTP Requests.',
      tools: 'IntelliJ Idea, GITHUB, POSTMAN, Visual Studio Code, Jira Board',
      status: 'Complete',
      type: 'Organisation',
      responsibilities: ['As an Angular Developer to the Outplay Product Team member.', 'Involved in any changes throughout the developing in-phase application as per Product requirements', 'Aligning with UX Designer, Product Manager, and specialists to create responsive and appealing web application.', 'Involved in implementing the change throughout the application, such as, Angular upgrade, Package updates for peer deps.', 'Responsible for cross-verifying done changes ensure not to disrupt the flow of existing use case.', 'Revamping the components to allow creating reusable components that help consistency throughout the application.', 'Involved in planning and execution of different roadmaps for the application growth and stability and to prevent security vulnerabilities.', 'Responsible for initiation of making the application a better product with code readability.', 'Debugging local backend for http error handling and resolving at frontend.', 'Integrating the Web services in the Angular project, Developing Responsive in-app search engine designs for application using Angular materials, RXJS, and Reactive forms.']
    },
    {
      name: 'myImpact Orch.',
      description: 'myImpact Orchestration Application, the word Orchestration itself defines the application which works with the nodes. It is to be configured in such a way that every node added in the canvas using unique ID, is a product of the client and it repesents the impact analysis on the changes that have been made in software on it, if any. It gives in and out of the product and checks sanity, dependency, hierarchical relations between nodes (referred as products). Complicated and challenging tasks throughout the due, which will help in product lifecycle management. (PLM/CM).',
      role: 'Angular Developer',
      skills: 'Angular 9/15, Angular Material (latest), Typescript, Git, NGRX Store, HTML, RxJS, CSS, Karma, Jasmine, yFiles, Utilities, and JSON/HTTP Requests.',
      tools: 'IntelliJ Idea, GITHUB, POSTMAN, Visual Studio Code, Jira Board',
      status: 'Complete',
      type: 'Organisation',
      responsibilities: ['As a Developer to the Mirai Team member.', 'Aligning with UX Designers/Java Developers, to make frontend application more intuitive and interactive', 'Involved in any changes throughout the developing in-phase application as per Client requirements.', 'Writing test cases along development with 100% coverage in Components, Services, Pipes, and Models.', 'Reusable components, maintaining compatibility with Angular latest versions in library.', 'Integrating the Web services in the Angular project, Developing Responsive in-app search engine designs for application using Angular materials, RXJS, and Reactive forms.', 'Development of a given task throughout the application for better workflow and intuitive client-server communication.', 'Beside coding and testing, performing the change update, and code review.', 'Tested the application on Web browser in different compatibilities', 'Working with Angular user-defined libraries, testing and debugging.', 'Debugging local backend for http error handling and resolving at frontend.']
    },
    {
      name: 'Money Chunks',
      description: 'It\'s a firebase hosted application with Auto Google Authentication. This is mainly for users who wants to earn some chunks with Google Adsense, Faucets, and much more for a specific Geographic Location.',
      git: 'https://gitlab.com/vinayenjapuri/money-chunks',
      status: "Progress",
      //website: 'https://money-chunks.web.app/home',
      role: 'Developer',
      tools: 'IntelliJ Idea, Visual Studio Code, Firebase CLI',
      skills: 'Angular 17, Angular Material (latest), Typescript, Git, NGRX Store, HTML, RxJS, CSS, Karma, Jasmine, Firebase, Utilities, and JSON/HTTP Requests',
      responsibilities: []
    },
    {
      name: 'REST Countries',
      description: 'REST Countries, it is an application that shows the countries just as the products in e-commerce. And when one country is selected, you would see its details in the other page. It is build using SPAs. In the second page, list of neighborhood countries would be displayed and then link forwarded to its detail as a button. Not only that, it has filters such as select options with regions including all by default. And Autocomplete filter input of the data collected through API. Profound interests in reducing change detection strategy, the application works smoothly with no problem.',
      status: "Complete",
      role: 'Developer',
      tools: 'IntelliJ Idea, Visual Studio Code.',
      skills: 'Angular 14, HTML5, CSS3, RXJS, HTTP, Typescript, NgRxStore, and HTTP Requests/JSON.',
      responsibilities: ['Designing from scratch and developing algorithms.', 'Involves in requirements discussion, design, and in all other phase', 'Integrating the Web services in the Angular project, Developing Responsive web designs for application using Angular materials and Reactive forms.', 'Development of various components of the application. Have worked on coding of almost all the components of the application.', 'Beside coding and testing, performing the performance analysis, code review', 'Developing mobile web version of the application for the devices (iPhone, Android Phones, iPad & Android Tablets).']
    },
    {
      name: 'Fair Del',
      description: 'FairDel, it is an packages delivery application that has driven to deliver the customers’ household packages such as greetings, cakes, and gifts throughout the based region at fair prices in accordance to the current fuel market. It gives customer to select the sender that includes details such as bike company and its mileage algorithm. Such that, the price varies with the distance covered.',
      status: "Complete",
      role: 'Team Lead and Developer',
      tools: 'IntelliJ Idea, Visual Studio Code.',
      skills: 'Angular, HTML5, CSS3, RXJS, HTTP, Typescript, NgRxStore, and JSON.',
      responsibilities: ['Leading the team and developing algorithms.', 'Involves in requirements discussion, design, and in all other phase.', 'Development of various components of the application. Have worked on coding of almost all the components of the application.', 'Integrating the Web services in the Angular project, Developing Responsive web designs for application using Angular materials and Reactive forms.']
    },
    {
      name: 'EasyEarn',
      description: 'EasyEarn, it is an application for users to earn money as a payout generated weekly to their PayPal accounts using different components such as rolls, GoogleAds, and video completion tasks.',
      status: "Complete",
      role: 'Team Lead and Developer',
      tools: 'IntelliJ Idea, Visual Studio Code.',
      skills: 'Angular, HTML5, CSS3, RXJS, HTTP, Typescript, and JSON.',
      responsibilities: ['Leading the team and developing algorithms.', 'Involves in requirements discussion, design, and in all other phase.', 'Development of various components of the application. Have worked on coding of almost all the components of the application.', 'Integrating the Web services in the Angular project, Developing Responsive web designs for application using Angular materials and Reactive forms.']
    },
    {
      name: 'Dynamic Classes using @Mixin and SASS',
      image: 'assets/scss-css.png',
      status: "Article",
      website: 'https://medium.com/@vinayenjapuri/dynamic-classes-using-mixin-and-sass-23ba99d349d1'
    }
  ]

  openItem(item: Apps) {
    if (item?.status === "Article") {
      return;
    }
    this.currentItem = item;
    this.matBottomSheet.open(this.pocSheetItemRef);
  }

  openSource(git: string | undefined) {
    if (git) {
      window.open(git, '_blank');
    }
  }

  openWebsite(website: string | undefined) {
    if (website) {
      window.open(website, '_blank');
    }
  }
}
