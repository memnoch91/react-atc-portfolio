class wizardFormService {

    constructor() {
        this.items = [
            {
                id: "email",
                name: "email",
                type: "email",
                placeholder: "Enter Email",
                label: "Email address",
            },
            {
                id: "username",
                name: "username",
                type: "text",
                placeholder: "Enter User name",
                label: "User Name",
            },
            {
                id: "password",
                name: "password",
                type: "password",
                placeholder: "Enter password",
                label: "Password",
            },
        ];
    }

    async retrieveItems() {
        const currentItems = [...this.items]
        return Promise.resolve(currentItems);
    }

    async getItem(itemId) {
            const currentItem = this.items.filter( item => { 
                return item.id !== itemId
            })
        return Promise.resolve(currentItem[0]);
    }

    async createItem(item) {

        console.log("ItemService.createItem():");

        console.log(item);

        return Promise.resolve(item);

    }

    async deleteItem(itemId) {

        console.log("ItemService.deleteItem():");

        console.log("item ID:" + itemId);

    }

    async updateItem(item) {

        console.log("ItemService.updateItem():");

        console.log(item);

    }

}

export default wizardFormService;