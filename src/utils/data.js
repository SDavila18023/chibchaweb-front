import disk from "../assets/icons/disk.svg"
import cloud from "../assets/icons/cloud.svg"
import email from "../assets/icons/mail.svg"
import domain from "../assets/icons/globe.svg"
import database from "../assets/icons/database.svg"


const typesDocuments = [
    { name: "Cedula de ciudadania", value: "cedulaCiudadania" },
    { name: "Cedula extranjera", value: "cedulaExtranjera" }
]

const listCountries = [
    { name: "Colombia", value: "Colombia" },
    { name: "Portugal", value: "Portugal"},
    { name: "Brasil", value: "Brasil"}
]

const listAreas = [
    { name: "Administracion", value: "administracion" },
    { name: "Finanzas", value: "finanzas" },
]

const troubles = [
    { name: "Dominios", value: "Dominio" },
    { name: "Hosting", value: "Host" }
]

const homeLinks = [
    { name: "Registrarte", to: "register" },
    { name: "Iniciar sesión", to: "login" },
    { name: "Planes", to: "plans" },
    { name: "Ayuda", value: "" },
]

const homeAuthUser = [
    { name: "Mi cuenta", to: "account" },
    { name: "Dominios", to: "domains" },
    { name: "Planes", to: "plans" },
    { name: "Tickets", to: "tickets" },
]

const homeAuthAdministrator = [
    { name: "Gestión usuarios", to: "/managementuser" },
    { name: "Proveedores", to: "/" },
    { name: "Tickets", to: "/tickets" },
]

const footerServices = [
    { name: "Servicios", to: "." },
    { name: "Dominios", to: "domains" },
    { name: "Planes", to: "plans" },
]

const footerHelp = [
    { name: "Ayuda", to: "." },
    { name: "Generar ticket", to: "tickets" },
]


const planBasic = {
    id: "1",
    title: "Chibcha Bronce",
    subtitle: "Plan basico",
    price: "65.000 / año",
    benefits: [
        { urlImage: disk, title: "10GB de espacio SSD" },
        { urlImage: cloud, title: "Copia de seguridad" },
        { urlImage: email, title: "10 Correos asociados" },
        { urlImage: domain, title: "5 Dominios" },
        { urlImage: database, title: "1 Base de datos" },
    ]
}

const planMedium = {
    id: "2",
    title: "Chibcha Plata",
    subtitle: "Plan medio",
    price: "85.000 / año",
    benefits: [
        { urlImage: disk, title: "10GB de espacio SSD" },
        { urlImage: cloud, title: "Copia de seguridad" },
        { urlImage: email, title: "10 Correos asociados" },
        { urlImage: domain, title: "5 Dominios" },
        { urlImage: database, title: "1 Base de datos" },
    ]
}


const planPlatinum = {
    id: "3",
    title: "Chibcha Oro",
    subtitle: "Plan basico",
    price: "65.000 / año",
    benefits: [
        { urlImage: disk, title: "10GB de espacio SSD" },
        { urlImage: cloud, title: "Copia de seguridad" },
        { urlImage: email, title: "10 Correos asociados" },
        { urlImage: domain, title: "5 Dominios" },
        { urlImage: database, title: "1 Base de datos" },
    ]
}

const listPlans = [
    planBasic,
    planMedium,
    planPlatinum
]


export { typesDocuments, listCountries, listAreas, homeLinks, homeAuthUser, homeAuthAdministrator, footerServices, footerHelp, listPlans, planBasic, troubles }