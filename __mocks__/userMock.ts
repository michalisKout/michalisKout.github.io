export default {
  sys: {
    type: "Array",
  },
  total: 1,
  skip: 0,
  limit: 100,
  items: [
    {
      sys: {
        space: {
          sys: {
            type: "Link",
            linkType: "Space",
            id: "66v9jygob9x8",
          },
        },
        id: "75Pg9dAmZW4XuS2iDW9qOG",
        type: "Entry",
        createdAt: "2020-07-05T17:26:45.852Z",
        updatedAt: "2021-02-20T17:59:41.174Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 6,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "personalDetails",
          },
        },
        locale: "en-US",
      },
      fields: {
        mailTitle: "about me",
        mainDescription: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    "Hello I am Michael, Frontend engineer. I mainly develop React Applications focusing on quality deliverables. I am a big fan of clean code principals, clean architecture and best practises. I like researching and playing around with new front end technologies and techniques that can increase my productivity and improve time management. Finally, music is an integral part of my daily life and helps me relax and stay focused.",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
          ],
          nodeType: "document",
        },
        infoTitle: "personal info",
        infoName: "michalis koutridis",
        infoBirthday: "1992-01-29T00:00+02:00",
        infoNationality: "greek",
        infoCity: "athens",
        infoEmail: "michalis.koutridis@gmail.com",
        infoGithub: "https://github.com/michalisKout",
        infoLinkedin:
          "https://www.linkedin.com/in/michalis-koutridis-340774124/",
        profileImage: {
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "66v9jygob9x8",
              },
            },
            id: "4wi7f5z2zjh9XIA1yWFo1N",
            type: "Asset",
            createdAt: "2021-02-20T17:59:30.437Z",
            updatedAt: "2021-02-20T17:59:30.437Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            locale: "en-US",
          },
          fields: {
            title: "main profile image",
            file: {
              url:
                "//images.ctfassets.net/66v9jygob9x8/4wi7f5z2zjh9XIA1yWFo1N/49dd67b5a2c96ff3af0c0edd70322cc9/0981.jpg",
              details: {
                size: 546403,
                image: {
                  width: 1280,
                  height: 854,
                },
              },
              fileName: "0981.jpg",
              contentType: "image/jpeg",
            },
          },
        },
      },
    },
  ],
  includes: {
    Asset: [
      {
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "66v9jygob9x8",
            },
          },
          id: "4wi7f5z2zjh9XIA1yWFo1N",
          type: "Asset",
          createdAt: "2021-02-20T17:59:30.437Z",
          updatedAt: "2021-02-20T17:59:30.437Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 1,
          locale: "en-US",
        },
        fields: {
          title: "main profile image",
          file: {
            url:
              "//images.ctfassets.net/66v9jygob9x8/4wi7f5z2zjh9XIA1yWFo1N/49dd67b5a2c96ff3af0c0edd70322cc9/0981.jpg",
            details: {
              size: 546403,
              image: {
                width: 1280,
                height: 854,
              },
            },
            fileName: "0981.jpg",
            contentType: "image/jpeg",
          },
        },
      },
    ],
  },
};
