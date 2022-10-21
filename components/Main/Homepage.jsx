import React from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const Homepage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Container
        sx={{
          maxWidth: "lg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          py: 6,
          px: 2,
        }}
      >
        {/* Headline */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {/* Headline => For Mobile */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "85%",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "5px",
                  backgroundColor: "black",
                  mr: 15,
                }}
              ></Box>
              <Box
                sx={{
                  width: "200px",
                  height: "12px",
                  backgroundColor: "black",
                }}
              ></Box>
            </Box>
          </Box>
          <Typography
            sx={{
              fontFamily: "AutoTeachnoItalic",
              color: "#FFCF00",
              letterSpacing: "3px",
              lineHeight: "100px",
              fontSize: "61px",
            }}
          >
            Reflektalpha
          </Typography>
        </Box>
        {/* Middle Section => Left Text + Right Image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
            width: "100%",
            mt: 1,
            px: 0.5,
          }}
        >
          {/*Middle Section => Left Text */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              width: { xs: "100%", sm: "95%", md: "50%" },
              mt: { xs: 1.5, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Robotics",
                color: "white",
                fontSize: "20px",
              }}
            >
              The Reflekt Alpha Chip is an NFT that grants you mirror access to
              live chats from alpha groups in Cardano for a fraction of the
              cost.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Robotics",
                color: "white",
                fontSize: "20px",
                marginTop: 2,
              }}
            >
              Simply hold the NFT and authenticate on our Discord server for
              access.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Robotics",
                color: "white",
                fontSize: "20px",
                marginTop: 2,
              }}
            >
              Multiple alpha channels with no delay.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Robotics",
                color: "white",
                fontSize: "20px",
                marginTop: 2,
              }}
            >
              Additional benifits for holders of multiple Reflekt Chips.
            </Typography>
          </Box>
          {/*Middle Section => Right Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "250px", sm: "300px", md: "350px" },
              height: { xs: "300px", sm: "350px", md: "400px" },
              position: "relative",
              transition: "all  0.3s ease",
              mr: { xs: 0, md: 2 },
            }}
          >
            <Image
              src="/assets/pictures/Chip.png"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Box>
        </Box>
        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "black",
            py: 1.4,
            px: 2,
            mt: { xs: 7, md: 2 },
          }}
        >
          <Link href="https://www.discord.com">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "30px",
                position: "relative",
                transition: "all  0.3s ease",
                cursor: "pointer",
                mr: 1,
              }}
            >
              <Image
                src="/assets/pictures/discord_white.svg"
                layout="fill"
                objectFit="contain"
                priority
              />
            </Box>
          </Link>
          <Link href="https://www.twitter.com">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "30px",
                position: "relative",
                transition: "all  0.3s ease",
                cursor: "pointer",
                ml: 1,
              }}
            >
              <Image
                src="/assets/pictures/twitter_white.svg"
                layout="fill"
                objectFit="contain"
                priority
              />
            </Box>
          </Link>
        </Box>
        {/* Footer  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
            width: "100%",
            mt: { xs: 5.5, md: 3.5 },
          }}
        >
          {/* Footer => Horizontal Bar */}
          <Box
            sx={{
              width: "30%",
              height: "10px",
              backgroundColor: "black",
              mt: { xs: 1, md: 0 },
            }}
          ></Box>
          {/* Footer => Policy Id Text */}
          <Box
            sx={{
              ml: { xs: 0, md: 5 },
              px: 1,
              py: 0.2,
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Robotics",
                fontSize: { xs: "16px", sm: "18px" },
                color: "white",
                textAlign: "center",
              }}
            >
              Policy ID: xxxxxxxxxxxxxxxxxxxx
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Homepage;
