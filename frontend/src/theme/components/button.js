export const Button = {
    baseStyle: {
        fontWeight: "normal", // Normally, it is "semibold"
    },
    sizes: {
        xl : {
            p: "1rem",
            fontSize: "1rem",
            borderRadius : "15px 0px 15px 15px"
        },
    },
    variants: {
        "secondary": {
            bg: "transparent",
            fontSize: "12px",
            color: "rgba(9, 107, 239, 1)",
            border: "1px solid rgba(9, 107, 239, 1)"
        },
        "primary": {
            bg: "#E8F7FF",
            fontSize: "12px",
            color: "rgba(9, 107, 239, 1)",
            border: "1px solid #E8F7FF"
        },
        "main": {
            bg: "#096BEF",
            color: "#fff"
        }
    }
}