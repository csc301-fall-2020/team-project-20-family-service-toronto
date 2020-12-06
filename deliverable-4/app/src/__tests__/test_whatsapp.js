import '@testing-library/jest-dom'

import WhatsApp from '../components/WhatsApp/WhatsApp.js';

let windowSpy, createLink = undefined;
let destination_url = "https://web.whatsapp.com";

describe('App', () => {

    beforeAll(() => {
        expect(WhatsApp.prototype).toHaveProperty("createWhatsAppLink")
        createLink = WhatsApp.prototype.createWhatsAppLink
        expect(createLink instanceof Function).toBeTruthy();
    })

    beforeEach(() => {
        windowSpy = jest.spyOn(window, "window", "get");
        destination_url = createLink("")
        windowSpy.mockImplementation(() => ({
            location: {
                origin: destination_url
            }
        }));
    });

    afterEach(() => {
        windowSpy.mockRestore();
    })

    it('redirects to expected url', () => {
        expect(window.location.origin).toMatch(destination_url)
    })
});