class MobieNavbar {
    constructor() {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navLinks.classlist.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventLinstener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MobieNavbar = new MobieNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
MobieNavbar.init();