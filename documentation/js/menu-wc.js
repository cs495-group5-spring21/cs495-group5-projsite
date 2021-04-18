'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-a54afa8206d22eb2b0a31c6d85e32798"' : 'data-target="#xs-components-links-module-AdminModule-a54afa8206d22eb2b0a31c6d85e32798"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-a54afa8206d22eb2b0a31c6d85e32798"' :
                                            'id="xs-components-links-module-AdminModule-a54afa8206d22eb2b0a31c6d85e32798"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminNavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminNavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnalyticsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnalyticsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArchiveManagementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArchiveManagementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SiteManagementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiteManagementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserManagementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserManagementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-70478fdb41e0e7e8b09c4be75aaff166"' : 'data-target="#xs-components-links-module-AppModule-70478fdb41e0e7e8b09c4be75aaff166"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-70478fdb41e0e7e8b09c4be75aaff166"' :
                                            'id="xs-components-links-module-AppModule-70478fdb41e0e7e8b09c4be75aaff166"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArchiveModule.html" data-type="entity-link">ArchiveModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArchiveModule-f200a2f2eef7d09ba939e51906546ebd"' : 'data-target="#xs-components-links-module-ArchiveModule-f200a2f2eef7d09ba939e51906546ebd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArchiveModule-f200a2f2eef7d09ba939e51906546ebd"' :
                                            'id="xs-components-links-module-ArchiveModule-f200a2f2eef7d09ba939e51906546ebd"' }>
                                            <li class="link">
                                                <a href="components/AssociatesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssociatesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeasureDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeasureDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeasuresComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeasuresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MembersHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MembersHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MembersNavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MembersNavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MembersNewsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MembersNewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MembersNewsDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MembersNewsDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-7cc7552008889aee20f7fb186cb10161"' : 'data-target="#xs-components-links-module-AuthModule-7cc7552008889aee20f7fb186cb10161"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-7cc7552008889aee20f7fb186cb10161"' :
                                            'id="xs-components-links-module-AuthModule-7cc7552008889aee20f7fb186cb10161"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileVerifyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileVerifyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerifyEmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyEmailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link">PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-2c9c9ccd4214af2fbe39b6aeae69280f"' : 'data-target="#xs-components-links-module-PublicModule-2c9c9ccd4214af2fbe39b6aeae69280f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-2c9c9ccd4214af2fbe39b6aeae69280f"' :
                                            'id="xs-components-links-module-PublicModule-2c9c9ccd4214af2fbe39b6aeae69280f"' }>
                                            <li class="link">
                                                <a href="components/AboutPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssociateListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssociateListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CTAComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CTAComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickIconComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickIconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommunityPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommunityPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExLinkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExLinkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FacultyStaffComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FacultyStaffComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GivingPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GivingPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconBoxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageLinksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageLinksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeoplePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PeoplePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeminarPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SeminarPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopLinkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopLinkComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-76b4915277e5bdde66779bcf36ac9ac5"' : 'data-target="#xs-components-links-module-SharedModule-76b4915277e5bdde66779bcf36ac9ac5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-76b4915277e5bdde66779bcf36ac9ac5"' :
                                            'id="xs-components-links-module-SharedModule-76b4915277e5bdde66779bcf36ac9ac5"' }>
                                            <li class="link">
                                                <a href="components/BreadcrumbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarouselComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewscardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewscardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RouterOutletComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RouterOutletComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnalyticsService.html" data-type="entity-link">AnalyticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseAuthService.html" data-type="entity-link">FirebaseAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeasureFilesService.html" data-type="entity-link">MeasureFilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeasuresService.html" data-type="entity-link">MeasuresService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PeopleService.html" data-type="entity-link">PeopleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoriesService.html" data-type="entity-link">StoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/EmailVerifyGuardService.html" data-type="entity-link">EmailVerifyGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginGuardService.html" data-type="entity-link">LoginGuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Analytic.html" data-type="entity-link">Analytic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Associate.html" data-type="entity-link">Associate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Faculty.html" data-type="entity-link">Faculty</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FirebaseUser.html" data-type="entity-link">FirebaseUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Measure.html" data-type="entity-link">Measure</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Story.html" data-type="entity-link">Story</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Student.html" data-type="entity-link">Student</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});