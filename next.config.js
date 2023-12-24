require("intersection-observer");

module.exports = {
  target: "serverless",
  images: {
    domains: ["res.cloudinary.com", "upload.wikimedia.org"],
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [{ removeViewBox: false }],
              },
            },
          },
        ],
      }
    );
    return config;
  },
};
