const postUrl = 'http://localhost:8080/contactform';

export interface IActionResult {
    successful: boolean;
    message?: string;
}


export interface IContactForm {
    firstName?: string;
    lastName?: string;
    email: string;
    message: string;
}

export const postContactForm = (contactForm: IContactForm) => {
    return fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactForm)
    }).then((data) => {
        debugger;
        return data.json();
    });
};