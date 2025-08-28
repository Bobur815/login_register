import { Button } from "@mui/material";

export function ModeButton({ active = false, ...props }) {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={(theme) => ({
        borderRadius: 2,             
        textTransform: "none",
        transition: "background-color .2s, border-color .2s, color .2s",

        /* Light defaults */
        bgcolor: "#fff",
        color: "text.primary",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "primary.main",

        /* Active (both modes) */
        ...(active && {
          bgcolor: "primary.main",
          color: "#fff",
          borderColor: "#fff",
          "&:hover": {
            bgcolor: "primary.dark",
            borderColor: "#fff",
          },
        }),
        
        /* Dark mode */
        ...theme.applyStyles("dark", {
          bgcolor: "#000",
          borderColor: "transparent",
          color: "text.primary",
        }),

        /* Hover (both modes) */
        "&:hover": {
          bgcolor: "primary.main",
          color: "#fff",
          borderColor: "#fff",
        },

      })}
      {...props}
    />
  );
}
