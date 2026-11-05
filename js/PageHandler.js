export  default class PageHandler{
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
        const collabLogo = this.#createDivEl()
        collabLogo.setAttribute("class", "logo");
        
        const logo = this.#currentDoc.createElement("img")
        logo.src = "./svg/logoCollab.svg"
        logo.setAttribute("alt", "Collab Logo")
        
        collabLogo.appendChild(logo)
        return collabLogo;
    }
    
    #creteNavItems(items){
        const listReferencesContainer = this.#currentDoc.createElement("ul")
        listReferencesContainer.classList.add("navItems")
        
        for(let i = 0 ; i < items.length; i++ )
        {
            const listReferencesItem = this.#currentDoc.createElement("li")
            listReferencesItem.classList.add("navTextSizeOrShrift")

            const referenceItem = this.#currentDoc.createElement("a")
            referenceItem.classList.add("refNoColor")
            referenceItem.setAttribute("href", "https://rickroll.it/rickroll.mp4")
            referenceItem.textContent = items[i]
            
            listReferencesItem.appendChild(referenceItem)
            listReferencesContainer.appendChild(listReferencesItem)
        }
        return listReferencesContainer;
    }
    
    #createRightBar(){
        const containerElement = this.#createDivEl()
        containerElement.classList.add("rightBar")
        
        const cartItemElement = this.#createElementA()
        cartItemElement.classList.add("cartItem")
        
        const cartLogoContainer = this.#createDivEl()
        cartLogoContainer.classList.add("cartLogo")
        
        const imageLogoElement = this.#createEl("img")
        imageLogoElement.setAttribute("src", "./svg/Vector.svg")
        imageLogoElement.setAttribute("alt", "cart")
        
        cartLogoContainer.appendChild(imageLogoElement)
        cartItemElement.appendChild(cartLogoContainer)
        
        const spanCart = this.#createEl("span")
        const spanCountInCart = this.#createEl("span")
        
        spanCart.classList.add("navTextSizeOrShrift")
        spanCountInCart.classList.add("navTextSizeOrShrift")
        spanCountInCart.style = "color: #3F53D8; font-size: 12px"
        
        spanCart.textContent = "Cart"
        spanCountInCart.textContent = "  0  ";
        
        cartItemElement.appendChild(spanCart)
        cartItemElement.appendChild(spanCountInCart)
        containerElement.appendChild(cartItemElement)
        
        const btnContainer = this.#createElementA()
        btnContainer.classList.add("refNoColor")
        btnContainer.setAttribute("href", "https://rickroll.it/rickroll.mp4")
        
        const  singUpBtn = this.#createEl("button")
        const singUpBtnText = this.#createEl("span")
        
        singUpBtn.classList.add("SingUpBTN")
        singUpBtnText.classList.add("SingUpBtnTextStyle")
        singUpBtnText.textContent = "Sing up for Beta"
        
        singUpBtn.appendChild(singUpBtnText)
        btnContainer.appendChild(singUpBtn)

        containerElement.appendChild(btnContainer)
        
        return containerElement;
    }
    
    #createFooterColumns(quickLinks, templateLinks, contacts)
    {
        const footerContainer = this.#createDivEl()
        footerContainer.classList.add("footerContainer")
        
        footerContainer.appendChild(this.#createFooterLogo())
        
        const footerColumnsContainer = this.#createDivEl()
        footerColumnsContainer.classList.add("footerColumns")
        
        footerColumnsContainer.appendChild(this.#createQuickLinks(quickLinks))
        footerColumnsContainer.appendChild(this.#createTemplateLinks(templateLinks))
        footerColumnsContainer.appendChild(this.#createContactLinks(contacts))
        
        footerContainer.appendChild(footerColumnsContainer)
        
        return footerContainer
        
    }
    
    #createFooterLogo(){
        const mainContainer = this.#createDivEl()
        mainContainer.classList.add("footerLogo")
        
        const  logo = this.#createEl("img")
        logo.setAttribute("src", "./svg/logoCollab.svg")
        logo.setAttribute("alt", "Collab Logo")
        
        mainContainer.appendChild(logo)
        
        return mainContainer
    }
    
    #createBottomFooterElements(protectedText, by){
        const bottomContainer = this.#createDivEl()
        bottomContainer.classList.add("footerBottom")
        
        const protectedTextElement = this.#createEl("p")
        const authorElement = this.#createEl("p")
        
        protectedTextElement.classList.add("footerBottomTextStyle")
        authorElement.classList.add("footerBottomTextStyle")
        
        protectedTextElement.textContent = protectedText
        authorElement.textContent = by
        
        bottomContainer.appendChild(protectedTextElement)
        bottomContainer.appendChild(authorElement)
        
        return bottomContainer
    }
    
    #createQuickLinks(links){
        const mainContainer = this.#createEl("ul")
        mainContainer.classList.add("footerColumn")

        const headItem = this.#createElLi()
        headItem.classList.add("textFooterHeadLine")
        headItem.textContent = "Quick Links"
        
        mainContainer.appendChild(headItem)
        
       this.#addLinks(mainContainer, links)
        
        
        return mainContainer;
    }
    
    #createTemplateLinks(templateLinks){
        const mainContainer = this.#createEl("ul")
        mainContainer.classList.add("footerColumn")
        
        const headItem = this.#createElLi()
        headItem.classList.add("textFooterHeadLine")
        headItem.textContent = "Template"
        
        mainContainer.appendChild(headItem)
        
        this.#addLinks(mainContainer, templateLinks)
        return mainContainer;
    }
    
    #createContactLinks(contacts){
        const mainContainer = this.#createEl("ul")
        mainContainer.classList.add("footerColumn")
        
        const headItem = this.#createElLi()
        headItem.classList.add("textFooterHeadLine")
        headItem.textContent = "Get In Touch"
        
        mainContainer.appendChild(headItem)
        
        for(let i = 0 ; i < contacts.length; i++){
            const item = this.#createElLi()
            item.classList.add("textItem")
            
            const insideInfo = this.#createElementA()
            insideInfo.classList.add("itemDisplay", "refNoColor")
            insideInfo.setAttribute("href", "https://rickroll.it/rickroll.mp4")
            
            const image = this.#createEl("img")
            image.setAttribute("src", "./svg/NetIcon.svg")
            image.setAttribute("alt", "NetIcon")
            
            insideInfo.appendChild(image)
            insideInfo.textContent = contacts[i]
            
            item.appendChild(insideInfo)
            
            mainContainer.appendChild(item)
        }   
        
        const iconsItem = this.#createElLi()
        iconsItem.classList.add("footerIconsDisplay")
        iconsItem.innerHTML = `<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <img src="./svg/faceBookIcon.svg" alt="facebook" class="footerIcon"> </a> <a href="https://X.com/" target="_blank" rel="noopener noreferrer"> <img src="./svg/Xicon.svg" alt="twitter" class="footerIcon"> </a> <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> <img src="./svg/InstaIcon.svg" alt="instagram" class="footerIcon"> </a> <a href="https://rickroll.it/rickroll.mp4" target="_blank" rel="noopener noreferrer"> <img src="./svg/StrangeIcon.svg" alt="strange" class="footerIcon"> </a>`
        
        mainContainer.appendChild(iconsItem)
        
        return mainContainer
        
    }
    
    #addLinks(element, items){
        for(let i = 0; i < items.length; i++ ){
            const linkItem = this.#createElLi()
            linkItem.classList.add("textItem")

            const textItem = this.#createElementA()
            textItem.classList.add("refNoColor")
            textItem.setAttribute("href", "https://rickroll.it/template")
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
    
    #createDivEl(){
        return this.#currentDoc.createElement("div")
    }
    
    #createElementA(){
        return this.#currentDoc.createElement("a")
    }
    
    #createEl(element){
        return this.#currentDoc.createElement(element)
    }
    #createElLi(){
        return this.#currentDoc.createElement("li")
    }
    
}