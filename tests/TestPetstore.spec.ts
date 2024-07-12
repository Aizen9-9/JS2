import {test, expect} from "playwright/test";

test("navigate Swagger petstore, check petId", async ({ page }) => {
await page.goto("https://petstore.swagger.io/");
let petId = page.getByRole('button', { name: 'POST /pet/{petId}/uploadImage uploads an image' });
    await expect(petId).toBeVisible();
})

test('check Authorize', async ({ page }) =>{
    await page.goto("https://petstore.swagger.io/");
    let authorize = page.getByRole('button', { name: 'Authorize' });
    await expect(authorize).toBeVisible();
})

test('check POST Create user', async ({page}) => {
    await page.goto("https://petstore.swagger.io/");
    let post = page.getByRole('button', { name: 'POST /user Create user' });
    await expect(post).toBeVisible();
})

test('check logo', async ({page}) => {
    await page.goto("https://petstore.swagger.io/");
    let logo = page.locator('a').filter({ hasText: '.logo_small_svg__cls-2{fill:#' });
    await expect(logo).toBeVisible();
})

const axios = require('axios');

test('POST request example', async () => {
    const userData = {
        id: 0,
        username: "Bodya",
        firstName: "Banan",
        lastName: "Bob",
        email: "qatesterclub@gmail.com",
        password: "12345678",
        phone: "77777777",
        userStatus: 0
    };
    const response = await axios.post('https://petstore.swagger.io/v2/user', userData);
    expect(response.status).toBe(200);
    console.log(response);
})