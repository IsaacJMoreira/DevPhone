export function login({ email, password }: any) {
    const delay = (0.7 + Math.random() * 2) * 1000;

    return new Promise<void>((resolve, reject) => {
        setTimeout(function () {
            if (password === "123456" && !!email) {
                resolve();
            } else {
                reject({ message: "e-mail or password wrong."})
            }
        }, delay)
    });
}