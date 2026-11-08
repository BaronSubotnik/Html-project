export default class PageHandler{
    #currentDoc;
    #quickLinks = ["Features", "About", "Pricing", "Pricinge Commerce", "Blog", "Contact", "Careers"];
    #templateLinks = ["Style Guide", "Licences", "Changelog", "Instructions", "Sign In", "Sign Up", "Forgot Password", "Password Protected", "404 Page"];
    #contactLinks = ["Support@collab.com", "+1-202-555-0144", "Collab.webflow.io"];

    constructor(doc){
        if(!(doc instanceof Document))
        {
            throw new Error("че та ты охренел")
        }
        this.#currentDoc = doc;
    }

    #createCollabLogo(){
        const collabLogo = this.#GetElement("div", ["logo"]);

        const logo = this.#GetElement("img", [], [
            ["src", "./svg/logoCollab.svg"],
            ["alt", "Collab Logo"]
        ]);

        collabLogo.appendChild(logo);
        return collabLogo;
    }

    #creteNavItems(items){
        const listReferencesContainer = this.#GetElement("ul", ["navItems"]);

        for(let i = 0 ; i < items.length; i++ )
        {
            const listReferencesItem = this.#GetElement("li", ["navTextSizeOrShrift"]);

            const referenceItem = this.#GetElement("a", ["refNoColor"], [
                ["href", "https://rickroll.it/rickroll.mp4"]
            ]);
            referenceItem.textContent = items[i];

            listReferencesItem.appendChild(referenceItem)
            listReferencesContainer.appendChild(listReferencesItem)
        }
        return listReferencesContainer;
    }

    #createRightBar(){
        const containerElement = this.#GetElement("div", ["rightBar"]);

        const cartItemElement = this.#GetElement("a", ["cartItem"]);

        const cartLogoContainer = this.#GetElement("div", ["cartLogo"]);

        const imageLogoElement = this.#GetElement("img", [], [
            ["src", "./svg/Vector.svg"],
            ["alt", "cart"]
        ]);

        cartLogoContainer.appendChild(imageLogoElement)
        cartItemElement.appendChild(cartLogoContainer)

        const spanCart = this.#GetElement("span", ["navTextSizeOrShrift"]);
        const spanCountInCart = this.#GetElement("span", ["navTextSizeOrShrift"], [
            ["style", "color: #3F53D8; font-size: 12px"]
        ]);

        spanCart.textContent = "Cart";
        spanCountInCart.textContent = "  0  ";

        cartItemElement.appendChild(spanCart)
        cartItemElement.appendChild(spanCountInCart)
        containerElement.appendChild(cartItemElement)

        const btnContainer = this.#GetElement("a", ["refNoColor"], [
            ["href", "https://rickroll.it/rickroll.mp4"]
        ]);

        const singUpBtn = this.#GetElement("button", ["SingUpBTN"]);
        const singUpBtnText = this.#GetElement("span", ["SingUpBtnTextStyle"]);

        singUpBtnText.textContent = "Sing up for Beta"

        singUpBtn.appendChild(singUpBtnText)
        btnContainer.appendChild(singUpBtn)

        containerElement.appendChild(btnContainer)

        return containerElement;
    }

    #createFooterColumns(quickLinks, templateLinks, contacts)
    {
        const footerContainer = this.#GetElement("div", ["footerContainer"]);

        footerContainer.appendChild(this.#createFooterLogo())

        const footerColumnsContainer = this.#GetElement("div", ["footerColumns"]);

        footerColumnsContainer.appendChild(this.#createQuickLinks(quickLinks))
        footerColumnsContainer.appendChild(this.#createTemplateLinks(templateLinks))
        footerColumnsContainer.appendChild(this.#createContactLinks(contacts))

        footerContainer.appendChild(footerColumnsContainer)

        return footerContainer

    }

    #createFooterLogo(){
        const mainContainer = this.#GetElement("div", ["footerLogo"]);

        const logo = this.#GetElement("img", [], [
            ["src", "./svg/logoCollab.svg"],
            ["alt", "Collab Logo"]
        ]);

        mainContainer.appendChild(logo)

        return mainContainer
    }

    #createBottomFooterElements(protectedText, by){
        const bottomContainer = this.#GetElement("div", ["footerBottom"]);

        const protectedTextElement = this.#GetElement("p", ["footerBottomTextStyle"]);
        const authorElement = this.#GetElement("p", ["footerBottomTextStyle"]);

        protectedTextElement.textContent = protectedText
        authorElement.textContent = by

        bottomContainer.appendChild(protectedTextElement)
        bottomContainer.appendChild(authorElement)

        return bottomContainer
    }

    #createQuickLinks(links){
        const mainContainer = this.#GetElement("ul", ["footerColumn"]);

        const headItem = this.#GetElement("li", ["textFooterHeadLine"]);
        headItem.textContent = "Quick Links"

        mainContainer.appendChild(headItem)

        this.#addLinks(mainContainer, links)

        return mainContainer;
    }

    #createTemplateLinks(templateLinks){
        const mainContainer = this.#GetElement("ul", ["footerColumn"]);

        const headItem = this.#GetElement("li", ["textFooterHeadLine"]);
        headItem.textContent = "Template"

        mainContainer.appendChild(headItem)

        this.#addLinks(mainContainer, templateLinks)
        return mainContainer;
    }

    #createContactLinks(contacts){
        const mainContainer = this.#GetElement("ul", ["footerColumn"]);

        const headItem = this.#GetElement("li", ["textFooterHeadLine"]);
        headItem.textContent = "Get In Touch"

        mainContainer.appendChild(headItem)

        for(let i = 0 ; i < contacts.length; i++){
            const item = this.#GetElement("li", ["textItem"]);

            const insideInfo = this.#GetElement("a", ["itemDisplay", "refNoColor"], [
                ["href", "https://rickroll.it/rickroll.mp4"]
            ]);

            const image = this.#GetElement("img", [], [
                ["src", "./svg/NetIcon.svg"],
                ["alt", "NetIcon"]
            ]);

            insideInfo.appendChild(image)
            insideInfo.textContent = contacts[i]

            item.appendChild(insideInfo)

            mainContainer.appendChild(item)
        }

        const iconsItem = this.#GetElement("li", ["footerIconsDisplay"]);
        iconsItem.innerHTML = `<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <img src="./svg/faceBookIcon.svg" alt="facebook" class="footerIcon"> </a> <a href="https://X.com/" target="_blank" rel="noopener noreferrer"> <img src="./svg/Xicon.svg" alt="twitter" class="footerIcon"> </a> <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> <img src="./svg/InstaIcon.svg" alt="instagram" class="footerIcon"> </a> <a href="https://rickroll.it/rickroll.mp4" target="_blank" rel="noopener noreferrer"> <img src="./svg/StrangeIcon.svg" alt="strange" class="footerIcon"> </a>`

        mainContainer.appendChild(iconsItem)

        return mainContainer

    }

    #addLinks(element, items){
        for(let i = 0; i < items.length; i++ ){
            const linkItem = this.#GetElement("li", ["textItem"]);

            const textItem = this.#GetElement("a", ["refNoColor"], [
                ["href", "https://rickroll.it/template"]
            ]);
            textItem.textContent = items[i]

            linkItem.appendChild(textItem)

            element.appendChild(linkItem)
        }
    }

    fillNavBar(nav){
        if(!(nav instanceof HTMLElement)){return;}

        nav.appendChild(this.#createCollabLogo());
        nav.appendChild(this.#creteNavItems(['Features','About', 'Pricing', 'Blog', 'Contact']))
        nav.appendChild(this.#createRightBar());
    }

    fillFooter(footer){
        if(!(footer instanceof HTMLElement)){return;}

        footer.appendChild(this.#createFooterColumns(this.#quickLinks, this.#templateLinks, this.#contactLinks))
        footer.appendChild(this.#createBottomFooterElements(`© All rights reserved by Khonshu`, 'Powered by Marc Spector'))

    }

    #GetElement(elementName, classList = [], attributesList = []){
        const element = this.#currentDoc.createElement(elementName)

        for(let i = 0; i < classList.length; i++){
            element.classList.add(classList[i])
        }

        for(let i = 0; i < attributesList.length; i++){
            const [attributeName, attributeValue] = attributesList[i]
            element.setAttribute(attributeName, attributeValue)
        }

        return element;
    }
}