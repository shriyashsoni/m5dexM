import React from "react";
import {
    Box,
    Container,
    Grid,
    IconButton,
    Stack,
    Typography,
    Button,
    useTheme,
} from "@mui/material";
import { footerContent, navbarContent } from "../../utils/content";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const { Logo } = navbarContent;
const { tagline, description, copyright, status, securityNote } = footerContent;

const FooterLink = ({ children, onClick, href, external = false }) => (
    <Typography
        component={href ? "a" : "span"}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        variant="body2"
        sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            color: "rgba(255, 255, 255, 0.65)",
            textDecoration: "none",
            cursor: "pointer",
            transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            fontSize: "0.92rem",
            "&:hover": {
                color: "#2f8af5",
                transform: "translateX(4px)",
            },
        }}
    >
        {children}
        {external && (
            <NorthEastIcon
                sx={{
                    fontSize: 12,
                    opacity: 0.7,
                    transition: "transform 0.2s ease",
                    "&:hover": { transform: "translate(2px, -2px)" },
                }}
            />
        )}
    </Typography>
);

const SocialIconButton = ({ icon: Icon, href, label }) => (
    <IconButton
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        sx={{
            width: 42,
            height: 42,
            borderRadius: "12px",
            bgcolor: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            color: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
                bgcolor: "rgba(47, 138, 245, 0.15)",
                borderColor: "rgba(47, 138, 245, 0.5)",
                color: "#2f8af5",
                transform: "translateY(-3px)",
                boxShadow: "0 8px 20px -4px rgba(47, 138, 245, 0.35)",
            },
        }}
    >
        <Icon sx={{ fontSize: 20 }} />
    </IconButton>
);

const MainFooter = () => {
    const theme = useTheme();

    const smoothScrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box
            component="footer"
            sx={{
                position: "relative",
                overflow: "hidden",
                pt: { xs: 8, md: 12 },
                pb: { xs: 6, md: 7 },
                background:
                    "radial-gradient(circle at 50% 0%, rgba(47, 138, 245, 0.12) 0%, rgba(6, 7, 10, 0.98) 55%, #06070a 100%)",
            }}
        >
            {/* Top glowing gradient divider line */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background:
                        "linear-gradient(90deg, transparent 0%, rgba(47, 138, 245, 0.6) 30%, rgba(168, 85, 247, 0.6) 70%, transparent 100%)",
                    boxShadow: "0 0 15px rgba(47, 138, 245, 0.4)",
                }}
            />

            <Container
                sx={{
                    [theme.breakpoints.up("lg")]: {
                        maxWidth: "1380px!important",
                    },
                }}
            >
                {/* Sexy Call-To-Action Glass Card */}
                <Box
                    sx={{
                        mb: { xs: 8, md: 10 },
                        p: { xs: 4, sm: 5, md: 6 },
                        borderRadius: "24px",
                        background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(47, 138, 245, 0.06) 50%, rgba(255, 255, 255, 0.02) 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(20px)",
                        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Background decorative ambient glow inside card */}
                    <Box
                        sx={{
                            position: "absolute",
                            right: -50,
                            top: -50,
                            width: 250,
                            height: 250,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(47, 138, 245, 0.25) 0%, transparent 70%)",
                            filter: "blur(40px)",
                            pointerEvents: "none",
                        }}
                    />

                    <Grid container spacing={4} alignItems="center" justifyContent="space-between">
                        <Grid item xs={12} md={7}>
                            <Stack spacing={1.5}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <ElectricBoltIcon sx={{ color: "#2f8af5", fontSize: 22 }} />
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            color: "#2f8af5",
                                            letterSpacing: 2,
                                            fontWeight: 700,
                                        }}
                                    >
                                        ONE-CLICK DEFI EXECUTION
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: { xs: "1.8rem", md: "2.3rem" },
                                        lineHeight: 1.2,
                                        background: "linear-gradient(135deg, #ffffff 40%, rgba(255, 255, 255, 0.7) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Ready to Teleport Your Liquidity?
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.65)",
                                        maxWidth: 580,
                                        fontSize: "1rem",
                                    }}
                                >
                                    Consolidate collateral, repay debts, and teleport liquidity across Aave, Uniswap, Spark, and Compound in a single atomic transaction.
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={2}
                                justifyContent={{ xs: "flex-start", md: "flex-end" }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => window.open("http://localhost:5174/", "_blank")}
                                    sx={{
                                        py: 1.5,
                                        px: 3.5,
                                        borderRadius: "14px",
                                        background: "linear-gradient(135deg, #2f8af5 0%, #1765c7 100%)",
                                        color: "#ffffff",
                                        fontWeight: 700,
                                        fontSize: "0.95rem",
                                        textTransform: "none",
                                        boxShadow: "0 10px 25px -5px rgba(47, 138, 245, 0.5)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            background: "linear-gradient(135deg, #3d96ff 0%, #2076e0 100%)",
                                            transform: "translateY(-2px)",
                                            boxShadow: "0 15px 30px -5px rgba(47, 138, 245, 0.65)",
                                        },
                                    }}
                                >
                                    Launch App (5174)
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => smoothScrollTo("supported-protocols")}
                                    sx={{
                                        py: 1.5,
                                        px: 3,
                                        borderRadius: "14px",
                                        borderColor: "rgba(255, 255, 255, 0.2)",
                                        color: "rgba(255, 255, 255, 0.9)",
                                        fontWeight: 600,
                                        fontSize: "0.95rem",
                                        textTransform: "none",
                                        backdropFilter: "blur(10px)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            borderColor: "rgba(47, 138, 245, 0.6)",
                                            bgcolor: "rgba(47, 138, 245, 0.08)",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    Explore Protocols
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

                {/* Main 4-Column Footer Navigation */}
                <Grid container spacing={{ xs: 5, md: 6 }} sx={{ mb: { xs: 6, md: 8 } }}>
                    {/* Column 1: Brand Info, Live Pulse & Socials */}
                    <Grid item xs={12} md={4.5}>
                        <Stack spacing={2.5}>
                            <Box
                                component="img"
                                src={Logo}
                                alt="1inch Teleport"
                                sx={{
                                    width: "160px",
                                    height: "auto",
                                    objectFit: "contain",
                                    cursor: "pointer",
                                    transition: "transform 0.25s ease",
                                    "&:hover": { transform: "scale(1.05)" },
                                }}
                                onClick={scrollToTop}
                            />

                            <Typography
                                variant="body2"
                                sx={{
                                    color: "rgba(255, 255, 255, 0.65)",
                                    lineHeight: 1.7,
                                    maxWidth: 380,
                                    fontSize: "0.92rem",
                                }}
                            >
                                {description}
                            </Typography>

                            {/* Live System Operational Status Badge */}
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 1.2,
                                    px: 2,
                                    py: 0.8,
                                    width: "fit-content",
                                    borderRadius: "100px",
                                    bgcolor: "rgba(16, 185, 129, 0.08)",
                                    border: "1px solid rgba(16, 185, 129, 0.25)",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        bgcolor: "#10b981",
                                        boxShadow: "0 0 10px #10b981",
                                        animation: "pulseDot 2s infinite ease-in-out",
                                        "@keyframes pulseDot": {
                                            "0%, 100%": { opacity: 1, transform: "scale(1)" },
                                            "50%": { opacity: 0.4, transform: "scale(0.85)" },
                                        },
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: "#34d399",
                                        fontWeight: 600,
                                        letterSpacing: 0.3,
                                        fontSize: "0.8rem",
                                    }}
                                >
                                    {status}
                                </Typography>
                            </Box>

                            {/* Social Community Icons */}
                            <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
                                <SocialIconButton
                                    icon={GitHubIcon}
                                    href="https://github.com/vm06007/teleport"
                                    label="GitHub"
                                />
                                <SocialIconButton
                                    icon={TwitterIcon}
                                    href="https://twitter.com/1inch"
                                    label="Twitter"
                                />
                                <SocialIconButton
                                    icon={TelegramIcon}
                                    href="https://t.me/OneInchNetwork"
                                    label="Telegram"
                                />
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Column 2: Protocol Navigation */}
                    <Grid item xs={6} sm={4} md={2.5}>
                        <Stack spacing={2}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: "#ffffff",
                                    fontWeight: 700,
                                    letterSpacing: 1.2,
                                    textTransform: "uppercase",
                                    fontSize: "0.82rem",
                                }}
                            >
                                Navigation
                            </Typography>
                            <Stack spacing={1.5}>
                                <FooterLink onClick={() => smoothScrollTo("product-features")}>
                                    Product Features
                                </FooterLink>
                                <FooterLink onClick={() => smoothScrollTo("unite-liquidity")}>
                                    Unite Liquidity
                                </FooterLink>
                                <FooterLink onClick={() => smoothScrollTo("behind-the-scenes")}>
                                    Behind The Scenes
                                </FooterLink>
                                <FooterLink onClick={() => smoothScrollTo("supported-protocols")}>
                                    Supported Protocols
                                </FooterLink>
                                <FooterLink onClick={() => window.open("http://localhost:5174/", "_blank")}>
                                    Launch Web3 App
                                </FooterLink>
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Column 3: Supported DeFi Ecosystem */}
                    <Grid item xs={6} sm={4} md={2.5}>
                        <Stack spacing={2}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: "#ffffff",
                                    fontWeight: 700,
                                    letterSpacing: 1.2,
                                    textTransform: "uppercase",
                                    fontSize: "0.82rem",
                                }}
                            >
                                Supported Protocols
                            </Typography>
                            <Stack spacing={1.5}>
                                <FooterLink href="https://1inch.io" external>
                                    1inch Aggregator
                                </FooterLink>
                                <FooterLink href="https://aave.com" external>
                                    Aave V3 Protocol
                                </FooterLink>
                                <FooterLink href="https://uniswap.org" external>
                                    Uniswap V4 Hooks
                                </FooterLink>
                                <FooterLink href="https://spark.fi" external>
                                    Spark Protocol
                                </FooterLink>
                                <FooterLink href="https://compound.finance" external>
                                    Compound Finance
                                </FooterLink>
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Column 4: Architecture & Security */}
                    <Grid item xs={12} sm={4} md={2.5}>
                        <Stack spacing={2}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: "#ffffff",
                                    fontWeight: 700,
                                    letterSpacing: 1.2,
                                    textTransform: "uppercase",
                                    fontSize: "0.82rem",
                                }}
                            >
                                Security & Tech
                            </Typography>
                            <Stack spacing={1.5}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <ShieldOutlinedIcon sx={{ color: "#2f8af5", fontSize: 16 }} />
                                    <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.65)" }}>
                                        Atomic Batching
                                    </Typography>
                                </Stack>
                                <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.65)" }}>
                                    Non-Custodial Architecture
                                </Typography>
                                <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.65)" }}>
                                    Ethereum Mainnet
                                </Typography>
                                <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.65)" }}>
                                    Arbitrum & Polygon
                                </Typography>
                                <FooterLink href="https://portal.1inch.dev" external>
                                    1inch Developer Portal
                                </FooterLink>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Bottom Bar: Copyright, Security note & Scroll to Top */}
                <Box
                    sx={{
                        pt: 4,
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                >
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        {/* Copyright */}
                        <Typography
                            variant="body2"
                            sx={{
                                color: "rgba(255, 255, 255, 0.5)",
                                fontSize: "0.88rem",
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            {copyright}
                        </Typography>

                        {/* Middle Security Highlight */}
                        <Typography
                            variant="caption"
                            sx={{
                                color: "rgba(255, 255, 255, 0.4)",
                                letterSpacing: 0.5,
                                fontSize: "0.8rem",
                                textAlign: "center",
                            }}
                        >
                            {securityNote}
                        </Typography>

                        {/* Back to top button */}
                        <Button
                            onClick={scrollToTop}
                            startIcon={<KeyboardArrowUpIcon />}
                            sx={{
                                color: "rgba(255, 255, 255, 0.7)",
                                textTransform: "none",
                                fontSize: "0.85rem",
                                borderRadius: "100px",
                                px: 2,
                                py: 0.6,
                                bgcolor: "rgba(255, 255, 255, 0.03)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                transition: "all 0.25s ease",
                                "&:hover": {
                                    bgcolor: "rgba(47, 138, 245, 0.12)",
                                    borderColor: "rgba(47, 138, 245, 0.4)",
                                    color: "#2f8af5",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            Back to Top
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default MainFooter;
