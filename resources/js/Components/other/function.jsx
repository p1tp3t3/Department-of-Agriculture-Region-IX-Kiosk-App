import axios from "axios";

export function change(e, setter) {
    const { name, value } = e.target;

    setter((prev) => ({
        ...prev,
        [name]: value,
    }));
}
export function sendData(link, d, success = () => {}, error = () => {}) {
    axios
        .post(link, d, {
            headers: { "Content-Type": "multipart/form-data" }
        })
        .then((data) => {
            success();
        })
        .catch((e) => {
            error();
        });
}
export function getData(
    t,
    link,
    data,
    setter = () => {},
    success = () => {},
    error = () => {}
) {
    if (t == "get") {
        axios
            .get(link)
            .then((data) => {
                setter(data.data);
                success();
            })
            .catch((e) => {
                error();
            });
    } else {
        axios
            .post(link, data)
            .then((data) => {
                setter(data.data);
                success();
            })
            .catch((e) => {
                error();
            });
    }
}
export function changeUserActivityStatus(action, status) {
    const d = JSON.stringify({ status: status })
    window.addEventListener(action, () => navigator.sendBeacon(`/activity/status`, d))
}
export const userActivity = () => {
    changeUserActivityStatus('load', true)
    changeUserActivityStatus('beforeunload', false)
}

export function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
}
export function readableDate(d) {
    const date = new Date(d)
    
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })
}
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export function fileChange(event, setPreview = () => {}, setFile = () => {}) {
    const file = event.target.files[0];
    if (file) {
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl); // Set the image preview
        setFile(file);
    }
}
export function getItemPic(path) {
    return `lost-item/${path}`;
}
export function splitStr(str) {
    return (str != undefined
    ? (str != null) ? str.split(",") : null
    : null);
}
export const configBroadcast = (type, broadcast, message, event, callBack = (e)=>{}) => {
    switch(type) {
        case 'public':
            Echo.channel(broadcast)
                .subscribed(() => {
                    console.log(`subscribed. ready for broadcasting public channel. ${message}`)
                })
                .listen(`${event}`, callBack)
            break
        case 'private':
            Echo.private(broadcast)
                .subscribed(() => {
                    console.log(`subscribed. ready for broadcasting private channel. ${message}`)
                })
                .listen(`${event}`, callBack)
            break
    }
}
export const notify = (b, i) => {
    if ("Notification" in window) {
        if (Notification.permission === "granted") {
            new Notification("Notification", {
                body: b,
                icon: i,
            });
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification("Notification", {
                        body: b,
                        icon: i,
                    });
                }
            });
        }
    }
}