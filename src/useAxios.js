import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          data: tempData,
          error,
        });
      });
  }, []);

  return state;
};

const tempData = {
  data: {
    status: "ok",
    status_message: "Query was successful",
    data: {
      movie_count: 32979,
      limit: 20,
      page_number: 1,
      movies: [
        {
          id: 33535,
          url: "https://yts.mx/movies/celtic-woman-destiny-2016",
          imdb_code: "tt6287960",
          title: "Celtic Woman: Destiny",
          title_english: "Celtic Woman: Destiny",
          title_long: "Celtic Woman: Destiny (2016)",
          slug: "celtic-woman-destiny-2016",
          year: 2016,
          rating: 9.6,
          runtime: 90,
          genres: ["Music"],
          summary:
            "The Destiny Tour features four sublimely gifted Irish women - three glorious vocalists and a brilliant Celtic violinist accompanied by full band, bagpipers, and Irish dancers whose exceptional talent and high energy bring a fresh fusion to centuries of musical and cultural tradition.",
          description_full:
            "The Destiny Tour features four sublimely gifted Irish women - three glorious vocalists and a brilliant Celtic violinist accompanied by full band, bagpipers, and Irish dancers whose exceptional talent and high energy bring a fresh fusion to centuries of musical and cultural tradition.",
          synopsis:
            "The Destiny Tour features four sublimely gifted Irish women - three glorious vocalists and a brilliant Celtic violinist accompanied by full band, bagpipers, and Irish dancers whose exceptional talent and high energy bring a fresh fusion to centuries of musical and cultural tradition.",
          yt_trailer_code: "2QnCHBVM6Y0",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/celtic_woman_destiny_2016/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/celtic_woman_destiny_2016/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/celtic_woman_destiny_2016/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/celtic_woman_destiny_2016/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/celtic_woman_destiny_2016/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/A4269551D0A0215DB54CD4036E9EA10E612E1628",
              hash: "A4269551D0A0215DB54CD4036E9EA10E612E1628",
              quality: "720p",
              type: "bluray",
              seeds: 65,
              peers: 15,
              size: "833.37 MB",
              size_bytes: 873851781,
              date_uploaded: "2021-07-03 17:43:44",
              date_uploaded_unix: 1625327024,
            },
            {
              url: "https://yts.mx/torrent/download/D418B5E7097BE74705CE926F7DD479AF9FC92CA1",
              hash: "D418B5E7097BE74705CE926F7DD479AF9FC92CA1",
              quality: "1080p",
              type: "bluray",
              seeds: 0,
              peers: 0,
              size: "1.51 GB",
              size_bytes: 1621350154,
              date_uploaded: "2021-07-03 19:59:31",
              date_uploaded_unix: 1625335171,
            },
          ],
          date_uploaded: "2021-07-03 17:43:44",
          date_uploaded_unix: 1625327024,
        },
        {
          id: 15553,
          url: "https://yts.mx/movies/doctor-who-the-day-of-the-doctor-2013",
          imdb_code: "tt2779318",
          title: "Doctor Who The Day of the Doctor",
          title_english: "Doctor Who The Day of the Doctor",
          title_long: "Doctor Who The Day of the Doctor (2013)",
          slug: "doctor-who-the-day-of-the-doctor-2013",
          year: 2013,
          rating: 9.4,
          runtime: 77,
          genres: [
            "Action",
            "Adventure",
            "Drama",
            "Family",
            "Mystery",
            "Sci-Fi",
          ],
          summary:
            "In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
          description_full:
            "In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
          synopsis:
            "In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
          yt_trailer_code: "Mkq8pnvsnQg",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/522D19B70EB06419D339E4B1470640090CA69286",
              hash: "522D19B70EB06419D339E4B1470640090CA69286",
              quality: "720p",
              type: "bluray",
              seeds: 54,
              peers: 1,
              size: "734.9 MB",
              size_bytes: 770598502,
              date_uploaded: "2020-02-24 05:16:24",
              date_uploaded_unix: 1582517784,
            },
            {
              url: "https://yts.mx/torrent/download/682E309437DFAE8BA08F44AD00D236B94FC0CD30",
              hash: "682E309437DFAE8BA08F44AD00D236B94FC0CD30",
              quality: "1080p",
              type: "bluray",
              seeds: 57,
              peers: 0,
              size: "1.42 GB",
              size_bytes: 1524713390,
              date_uploaded: "2020-02-24 07:15:16",
              date_uploaded_unix: 1582524916,
            },
          ],
          date_uploaded: "2020-02-24 05:16:24",
          date_uploaded_unix: 1582517784,
        },
        {
          id: 3709,
          url: "https://yts.mx/movies/the-shawshank-redemption-1994",
          imdb_code: "tt0111161",
          title: "The Shawshank Redemption",
          title_english: "The Shawshank Redemption",
          title_long: "The Shawshank Redemption (1994)",
          slug: "the-shawshank-redemption-1994",
          year: 1994,
          rating: 9.3,
          runtime: 142,
          genres: ["Action", "Crime", "Drama"],
          summary:
            "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
          description_full:
            "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
          synopsis:
            "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
          yt_trailer_code: "K_tLp7T6U1c",
          language: "en",
          mpa_rating: "R",
          background_image:
            "https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/AC418DB33FA5CEA4FAB11BC58008FE08F291C9BE",
              hash: "AC418DB33FA5CEA4FAB11BC58008FE08F291C9BE",
              quality: "720p",
              type: "bluray",
              seeds: 105,
              peers: 45,
              size: "848.96 MB",
              size_bytes: 890199081,
              date_uploaded: "2015-11-01 03:20:23",
              date_uploaded_unix: 1446344423,
            },
            {
              url: "https://yts.mx/torrent/download/E0D00667650ABA9EE05AACBBBD8B55EA8A51F534",
              hash: "E0D00667650ABA9EE05AACBBBD8B55EA8A51F534",
              quality: "1080p",
              type: "bluray",
              seeds: 248,
              peers: 47,
              size: "1.60 GB",
              size_bytes: 1717986918,
              date_uploaded: "2015-11-01 03:20:25",
              date_uploaded_unix: 1446344425,
            },
          ],
          date_uploaded: "2015-11-01 03:20:23",
          date_uploaded_unix: 1446344423,
        },
        {
          id: 29602,
          url: "https://yts.mx/movies/gotterdammerung-2013",
          imdb_code: "tt3885866",
          title: "G\u00f6tterd\u00e4mmerung",
          title_english: "G\u00f6tterd\u00e4mmerung",
          title_long: "G\u00f6tterd\u00e4mmerung (2013)",
          slug: "gotterdammerung-2013",
          year: 2013,
          rating: 9.3,
          runtime: 292,
          genres: ["Action", "Music"],
          summary:
            "The last of the four operas about The Ring of the Nibelungen: this death of the gods to make way for the humans, based on the Nibelungenlied.",
          description_full:
            "The last of the four operas about The Ring of the Nibelungen: this death of the gods to make way for the humans, based on the Nibelungenlied.",
          synopsis:
            "The last of the four operas about The Ring of the Nibelungen: this death of the gods to make way for the humans, based on the Nibelungenlied.",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/gotterdammerung_2013/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/gotterdammerung_2013/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/gotterdammerung_2013/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/gotterdammerung_2013/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/gotterdammerung_2013/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/CA9095A4178EF647380E5547BD7F327FC365ECA2",
              hash: "CA9095A4178EF647380E5547BD7F327FC365ECA2",
              quality: "720p",
              type: "bluray",
              seeds: 2,
              peers: 0,
              size: "2.62 GB",
              size_bytes: 2813203579,
              date_uploaded: "2021-03-28 07:03:59",
              date_uploaded_unix: 1616907839,
            },
            {
              url: "https://yts.mx/torrent/download/C023D68546A824E640EE69A2F7F0777ADC1ED7E8",
              hash: "C023D68546A824E640EE69A2F7F0777ADC1ED7E8",
              quality: "1080p",
              type: "bluray",
              seeds: 2,
              peers: 1,
              size: "5.38 GB",
              size_bytes: 5776731013,
              date_uploaded: "2021-03-28 11:05:07",
              date_uploaded_unix: 1616922307,
            },
          ],
          date_uploaded: "2021-03-28 07:03:59",
          date_uploaded_unix: 1616907839,
        },
        {
          id: 30440,
          url: "https://yts.mx/movies/avenged-sevenfold-live-in-the-l-b-c-diamonds-in-the-rough-2008",
          imdb_code: "tt1297265",
          title:
            "Avenged Sevenfold: Live in the L.B.C. & Diamonds in the Rough",
          title_english:
            "Avenged Sevenfold: Live in the L.B.C. & Diamonds in the Rough",
          title_long:
            "Avenged Sevenfold: Live in the L.B.C. & Diamonds in the Rough (2008)",
          slug: "avenged-sevenfold-live-in-the-l-b-c-diamonds-in-the-rough-2008",
          year: 2008,
          rating: 9.3,
          runtime: 102,
          genres: ["Documentary"],
          summary:
            "Avenged Sevenfold recorded their first live DVD at Long Beach Arena.",
          description_full:
            "Avenged Sevenfold recorded their first live DVD at Long Beach Arena.",
          synopsis:
            "Avenged Sevenfold recorded their first live DVD at Long Beach Arena.",
          yt_trailer_code: "bDQLCne_CGg",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/3DE0442CC20177AF397C2800E08C349EA0278591",
              hash: "3DE0442CC20177AF397C2800E08C349EA0278591",
              quality: "720p",
              type: "web",
              seeds: 2,
              peers: 7,
              size: "704.49 MB",
              size_bytes: 738711306,
              date_uploaded: "2021-04-15 16:08:57",
              date_uploaded_unix: 1618495737,
            },
            {
              url: "https://yts.mx/torrent/download/B1A8D0BAF1FE77B7504083F9FFF6087CFFB39B8B",
              hash: "B1A8D0BAF1FE77B7504083F9FFF6087CFFB39B8B",
              quality: "1080p",
              type: "web",
              seeds: 7,
              peers: 8,
              size: "1.28 GB",
              size_bytes: 1374389535,
              date_uploaded: "2021-04-15 17:09:30",
              date_uploaded_unix: 1618499370,
            },
          ],
          date_uploaded: "2021-04-15 16:08:57",
          date_uploaded_unix: 1618495737,
        },
        {
          id: 3304,
          url: "https://yts.mx/movies/the-godfather-1972",
          imdb_code: "tt0068646",
          title: "The Godfather",
          title_english: "The Godfather",
          title_long: "The Godfather (1972)",
          slug: "the-godfather-1972",
          year: 1972,
          rating: 9.2,
          runtime: 175,
          genres: ["Action", "Crime", "Drama"],
          summary:
            "The Godfather \"Don\" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart. \u2014srijanarora-152-448595",
          description_full:
            "The Godfather \"Don\" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart. \u2014srijanarora-152-448595",
          synopsis:
            "The Godfather \"Don\" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart. \u2014srijanarora-152-448595",
          yt_trailer_code: "fBNpSRtfIUA",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/The_Godfather_1972/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/The_Godfather_1972/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/The_Godfather_1972/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/The_Godfather_1972/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/The_Godfather_1972/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/C168B84FC2B8CF062B67E4168E35C98F10BC7C74",
              hash: "C168B84FC2B8CF062B67E4168E35C98F10BC7C74",
              quality: "720p",
              type: "bluray",
              seeds: 58,
              peers: 34,
              size: "1.20 GB",
              size_bytes: 1288490189,
              date_uploaded: "2015-11-01 02:36:37",
              date_uploaded_unix: 1446341797,
            },
            {
              url: "https://yts.mx/torrent/download/5E915039C619366E490D08DB3FFED21F3A3AE84A",
              hash: "5E915039C619366E490D08DB3FFED21F3A3AE84A",
              quality: "1080p",
              type: "bluray",
              seeds: 249,
              peers: 94,
              size: "2.40 GB",
              size_bytes: 2576980378,
              date_uploaded: "2015-11-01 02:36:38",
              date_uploaded_unix: 1446341798,
            },
            {
              url: "https://yts.mx/torrent/download/EAEFB74B7736D4579CC3DA91457DA7A755BABC3A",
              hash: "EAEFB74B7736D4579CC3DA91457DA7A755BABC3A",
              quality: "2160p",
              type: "web",
              seeds: 66,
              peers: 12,
              size: "7.9 GB",
              size_bytes: 8482560410,
              date_uploaded: "2020-09-05 14:58:40",
              date_uploaded_unix: 1599310720,
            },
          ],
          date_uploaded: "2015-11-01 02:36:37",
          date_uploaded_unix: 1446341797,
        },
        {
          id: 15527,
          url: "https://yts.mx/movies/top-gear-africa-special-part-1-2013",
          imdb_code: "tt2741136",
          title: "Top Gear Africa Special, Part 1",
          title_english: "Top Gear Africa Special, Part 1",
          title_long: "Top Gear Africa Special, Part 1 (2013)",
          slug: "top-gear-africa-special-part-1-2013",
          year: 2013,
          rating: 9.2,
          runtime: 0,
          genres: ["Action", "Adventure", "Comedy", "Reality-TV", "Talk-Show"],
          summary:
            "In the first of a two-part Top Gear special, Jeremy Clarkson, Richard Hammond and James May are in Africa with a simple mission - to find the definitive source of the Nile. Over the years many explorers claim to have already done just that, but the Top Gear trio believe that they can do better by traveling using only grit, ingenuity and three ageing estate cars. \u2014Anonymous",
          description_full:
            "In the first of a two-part Top Gear special, Jeremy Clarkson, Richard Hammond and James May are in Africa with a simple mission - to find the definitive source of the Nile. Over the years many explorers claim to have already done just that, but the Top Gear trio believe that they can do better by traveling using only grit, ingenuity and three ageing estate cars. \u2014Anonymous",
          synopsis:
            "In the first of a two-part Top Gear special, Jeremy Clarkson, Richard Hammond and James May are in Africa with a simple mission - to find the definitive source of the Nile. Over the years many explorers claim to have already done just that, but the Top Gear trio believe that they can do better by traveling using only grit, ingenuity and three ageing estate cars. \u2014Anonymous",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/top_gear_africa_special_part_1_2013/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/top_gear_africa_special_part_1_2013/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/top_gear_africa_special_part_1_2013/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/top_gear_africa_special_part_1_2013/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/top_gear_africa_special_part_1_2013/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/D76F89A72BF04B770A4B3C79EDBBCCBC8FEFDC70",
              hash: "D76F89A72BF04B770A4B3C79EDBBCCBC8FEFDC70",
              quality: "720p",
              type: "web",
              seeds: 9,
              peers: 0,
              size: "1.02 GB",
              size_bytes: 1095216660,
              date_uploaded: "2020-02-23 01:25:37",
              date_uploaded_unix: 1582417537,
            },
            {
              url: "https://yts.mx/torrent/download/ECA37497C70EC2F4D2B81DCE0D297DC01CAD5236",
              hash: "ECA37497C70EC2F4D2B81DCE0D297DC01CAD5236",
              quality: "1080p",
              type: "web",
              seeds: 16,
              peers: 2,
              size: "1.89 GB",
              size_bytes: 2029372047,
              date_uploaded: "2020-02-23 03:25:48",
              date_uploaded_unix: 1582424748,
            },
          ],
          date_uploaded: "2020-02-23 01:25:37",
          date_uploaded_unix: 1582417537,
        },
        {
          id: 29819,
          url: "https://yts.mx/movies/cm101mmxi-fundamentals-2013",
          imdb_code: "tt2592910",
          title: "CM101MMXI Fundamentals",
          title_english: "CM101MMXI Fundamentals",
          title_long: "CM101MMXI Fundamentals (2013)",
          slug: "cm101mmxi-fundamentals-2013",
          year: 2013,
          rating: 9.2,
          runtime: 139,
          genres: ["Comedy", "Documentary"],
          summary:
            "The funny little details of everyday life; the simple things that makes us laugh. An unforgettable performance from Cem Yilmaz. Yilmaz captures the audience with his hilarious stories about relationships, humankind's struggle with the technology and professional life. Yilmaz proves us that a food delivery or even a funeral might be amusing when considered correctly. \u2014Elmalma Brand Communication",
          description_full:
            "The funny little details of everyday life; the simple things that makes us laugh. An unforgettable performance from Cem Yilmaz. Yilmaz captures the audience with his hilarious stories about relationships, humankind's struggle with the technology and professional life. Yilmaz proves us that a food delivery or even a funeral might be amusing when considered correctly. \u2014Elmalma Brand Communication",
          synopsis:
            "The funny little details of everyday life; the simple things that makes us laugh. An unforgettable performance from Cem Yilmaz. Yilmaz captures the audience with his hilarious stories about relationships, humankind's struggle with the technology and professional life. Yilmaz proves us that a food delivery or even a funeral might be amusing when considered correctly. \u2014Elmalma Brand Communication",
          yt_trailer_code: "",
          language: "tr",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/cm101mmxi_fundamentals_2013/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/cm101mmxi_fundamentals_2013/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/cm101mmxi_fundamentals_2013/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/cm101mmxi_fundamentals_2013/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/cm101mmxi_fundamentals_2013/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/C349867D99D3F21ED4BF6DDBA654A7E689DA9396",
              hash: "C349867D99D3F21ED4BF6DDBA654A7E689DA9396",
              quality: "720p",
              type: "bluray",
              seeds: 6,
              peers: 1,
              size: "1.21 GB",
              size_bytes: 1299227607,
              date_uploaded: "2021-04-01 19:55:25",
              date_uploaded_unix: 1617299725,
            },
            {
              url: "https://yts.mx/torrent/download/9C77C68B9AB414C3845FE61B175891ADE770374A",
              hash: "9C77C68B9AB414C3845FE61B175891ADE770374A",
              quality: "1080p",
              type: "bluray",
              seeds: 8,
              peers: 3,
              size: "2.49 GB",
              size_bytes: 2673617142,
              date_uploaded: "2021-04-01 21:28:39",
              date_uploaded_unix: 1617305319,
            },
          ],
          date_uploaded: "2021-04-01 19:55:25",
          date_uploaded_unix: 1617299725,
        },
        {
          id: 32828,
          url: "https://yts.mx/movies/one-note-at-a-time-2016",
          imdb_code: "tt4780544",
          title: "One Note at a Time",
          title_english: "One Note at a Time",
          title_long: "One Note at a Time (2016)",
          slug: "one-note-at-a-time-2016",
          year: 2016,
          rating: 9.1,
          runtime: 95,
          genres: ["Documentary", "Music"],
          summary:
            "'If the musicians ain't got a chance to live, then what chance has the music got?' Dr John. This is a beautifully crafted, feature documentary, rich with colourful characters, and set in the iconic musical backdrop of New Orleans. In 2005 the music stopped, when one of the most deadly and destructive hurricanes in American history struck. The flood defences failed flooding the Crescent City for weeks. Lives were lost and shattered. Many displaced musicians felt compelled to return to the chaos and bleak confusion to play again. This is the story of some who made it back, told in their own words, with those who fought alongside to resuscitate the music scene; In particular the founders of The New Orleans Musicians' Clinic, a unique medical facility with the motto, 'Keeping the music alive'. \u2014Renee Edwards",
          description_full:
            "'If the musicians ain't got a chance to live, then what chance has the music got?' Dr John. This is a beautifully crafted, feature documentary, rich with colourful characters, and set in the iconic musical backdrop of New Orleans. In 2005 the music stopped, when one of the most deadly and destructive hurricanes in American history struck. The flood defences failed flooding the Crescent City for weeks. Lives were lost and shattered. Many displaced musicians felt compelled to return to the chaos and bleak confusion to play again. This is the story of some who made it back, told in their own words, with those who fought alongside to resuscitate the music scene; In particular the founders of The New Orleans Musicians' Clinic, a unique medical facility with the motto, 'Keeping the music alive'. \u2014Renee Edwards",
          synopsis:
            "'If the musicians ain't got a chance to live, then what chance has the music got?' Dr John. This is a beautifully crafted, feature documentary, rich with colourful characters, and set in the iconic musical backdrop of New Orleans. In 2005 the music stopped, when one of the most deadly and destructive hurricanes in American history struck. The flood defences failed flooding the Crescent City for weeks. Lives were lost and shattered. Many displaced musicians felt compelled to return to the chaos and bleak confusion to play again. This is the story of some who made it back, told in their own words, with those who fought alongside to resuscitate the music scene; In particular the founders of The New Orleans Musicians' Clinic, a unique medical facility with the motto, 'Keeping the music alive'. \u2014Renee Edwards",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/one_note_at_a_time_2016/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/one_note_at_a_time_2016/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/one_note_at_a_time_2016/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/one_note_at_a_time_2016/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/one_note_at_a_time_2016/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/D26FEE2281EC762AB5AB0885F80E862A99592ED3",
              hash: "D26FEE2281EC762AB5AB0885F80E862A99592ED3",
              quality: "720p",
              type: "web",
              seeds: 10,
              peers: 2,
              size: "874.4 MB",
              size_bytes: 916874854,
              date_uploaded: "2021-06-13 20:48:56",
              date_uploaded_unix: 1623610136,
            },
            {
              url: "https://yts.mx/torrent/download/5F7E7E960BA6A4C1755EF3604129EB478B495DE7",
              hash: "5F7E7E960BA6A4C1755EF3604129EB478B495DE7",
              quality: "1080p",
              type: "web",
              seeds: 14,
              peers: 3,
              size: "1.59 GB",
              size_bytes: 1707249500,
              date_uploaded: "2021-06-13 21:58:23",
              date_uploaded_unix: 1623614303,
            },
          ],
          date_uploaded: "2021-06-13 20:48:56",
          date_uploaded_unix: 1623610136,
        },
        {
          id: 25171,
          url: "https://yts.mx/movies/erasing-family-2020",
          imdb_code: "tt9252316",
          title: "Erasing Family",
          title_english: "Erasing Family",
          title_long: "Erasing Family (2020)",
          slug: "erasing-family-2020",
          year: 2020,
          rating: 9.1,
          runtime: 0,
          genres: ["Action", "Documentary"],
          summary:
            "In North America, over 25 MILLION PARENTS are being erased from their children's lives after divorce and separation. The ERASING FAMILY documentary follows young adults fighting to reunite with their broken families. Through the eyes of 23-year-old Ashlynn, 12-year-old Lauren and 28-year-old Brian, consequences on mental health caused by profiteering high-conflict divorce court settlements are revealed. The film shows programs that encourage mediation and shared parenting which will prevent parental alienation and future childhood trauma, making divorce and separation less costly both financially and emotionally. The film ends with children and parents being reunited on screen and will inspire other kids to reach out to #erased parents, siblings and grandparents. \u2014Ginger Gentile",
          description_full:
            "In North America, over 25 MILLION PARENTS are being erased from their children's lives after divorce and separation. The ERASING FAMILY documentary follows young adults fighting to reunite with their broken families. Through the eyes of 23-year-old Ashlynn, 12-year-old Lauren and 28-year-old Brian, consequences on mental health caused by profiteering high-conflict divorce court settlements are revealed. The film shows programs that encourage mediation and shared parenting which will prevent parental alienation and future childhood trauma, making divorce and separation less costly both financially and emotionally. The film ends with children and parents being reunited on screen and will inspire other kids to reach out to #erased parents, siblings and grandparents. \u2014Ginger Gentile",
          synopsis:
            "In North America, over 25 MILLION PARENTS are being erased from their children's lives after divorce and separation. The ERASING FAMILY documentary follows young adults fighting to reunite with their broken families. Through the eyes of 23-year-old Ashlynn, 12-year-old Lauren and 28-year-old Brian, consequences on mental health caused by profiteering high-conflict divorce court settlements are revealed. The film shows programs that encourage mediation and shared parenting which will prevent parental alienation and future childhood trauma, making divorce and separation less costly both financially and emotionally. The film ends with children and parents being reunited on screen and will inspire other kids to reach out to #erased parents, siblings and grandparents. \u2014Ginger Gentile",
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/erasing_family_2020/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/erasing_family_2020/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/erasing_family_2020/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/erasing_family_2020/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/erasing_family_2020/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/08E1058482D1D357DC415711FD0486DAB645FE73",
              hash: "08E1058482D1D357DC415711FD0486DAB645FE73",
              quality: "720p",
              type: "web",
              seeds: 5,
              peers: 0,
              size: "851.11 MB",
              size_bytes: 892453519,
              date_uploaded: "2020-12-22 10:12:19",
              date_uploaded_unix: 1608628339,
            },
            {
              url: "https://yts.mx/torrent/download/4F24FB5ABB9AA7764A02B74A3F83CBC0D0D313F4",
              hash: "4F24FB5ABB9AA7764A02B74A3F83CBC0D0D313F4",
              quality: "1080p",
              type: "web",
              seeds: 7,
              peers: 2,
              size: "1.54 GB",
              size_bytes: 1653562409,
              date_uploaded: "2020-12-22 12:07:26",
              date_uploaded_unix: 1608635246,
            },
          ],
          date_uploaded: "2020-12-22 10:12:19",
          date_uploaded_unix: 1608628339,
        },
        {
          id: 25318,
          url: "https://yts.mx/movies/soorarai-pottru-2020",
          imdb_code: "tt10189514",
          title: "Soorarai Pottru",
          title_english: "Soorarai Pottru",
          title_long: "Soorarai Pottru (2020)",
          slug: "soorarai-pottru-2020",
          year: 2020,
          rating: 9.1,
          runtime: 153,
          genres: ["Action", "Drama"],
          summary:
            "Inspired by the book 'Simply Fly', the film tells the story of Nedumaaran Rajangam known to friends as Maara, the son of a teacher, who sets out to make the common man fly and takes on the most capital intensive industry in the world with the help of his friends, family and sheer will power.",
          description_full:
            "Inspired by the book 'Simply Fly', the film tells the story of Nedumaaran Rajangam known to friends as Maara, the son of a teacher, who sets out to make the common man fly and takes on the most capital intensive industry in the world with the help of his friends, family and sheer will power.",
          synopsis:
            "Inspired by the book 'Simply Fly', the film tells the story of Nedumaaran Rajangam known to friends as Maara, the son of a teacher, who sets out to make the common man fly and takes on the most capital intensive industry in the world with the help of his friends, family and sheer will power.",
          yt_trailer_code: "",
          language: "ta",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/soorarai_pottru_2020/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/soorarai_pottru_2020/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/soorarai_pottru_2020/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/soorarai_pottru_2020/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/soorarai_pottru_2020/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/2383FE823E64EED78CB95AA9D80D93C45D640C86",
              hash: "2383FE823E64EED78CB95AA9D80D93C45D640C86",
              quality: "720p",
              type: "web",
              seeds: 26,
              peers: 4,
              size: "1.34 GB",
              size_bytes: 1438814044,
              date_uploaded: "2020-12-26 02:01:15",
              date_uploaded_unix: 1608944475,
            },
            {
              url: "https://yts.mx/torrent/download/301215E539CC8B60776F91FA0A80536CDA2415DE",
              hash: "301215E539CC8B60776F91FA0A80536CDA2415DE",
              quality: "1080p",
              type: "web",
              seeds: 20,
              peers: 3,
              size: "2.75 GB",
              size_bytes: 2952790016,
              date_uploaded: "2020-12-26 03:16:27",
              date_uploaded_unix: 1608948987,
            },
          ],
          date_uploaded: "2020-12-26 02:01:15",
          date_uploaded_unix: 1608944475,
        },
        {
          id: 29256,
          url: "https://yts.mx/movies/saving-mes-aynak-2014",
          imdb_code: "tt2412748",
          title: "Saving Mes Aynak",
          title_english: "Saving Mes Aynak",
          title_long: "Saving Mes Aynak (2014)",
          slug: "saving-mes-aynak-2014",
          year: 2014,
          rating: 9.1,
          runtime: 60,
          genres: ["Action", "Documentary"],
          summary:
            "Saving Mes Aynak follows Afghan archaeologist Qadir Temori as he races against time to save a 5,000-year-old archaeological site in Afghanistan from imminent demolition. A Chinese state-owned mining company is closing in on the ancient site, eager to harvest $100 billion dollars worth of copper buried directly beneath the archaeological ruins. Only 10% of Mes Aynak has been excavated, though, and some believe future discoveries at the site have the potential to redefine the history of Afghanistan and the history of Buddhism itself. Qadir Temori and his fellow Afghan archaeologists face what seems an impossible battle against the Chinese, the Taliban and local politics to save their cultural heritage from likely erasure. \u2014Brent E. Huffman",
          description_full:
            "Saving Mes Aynak follows Afghan archaeologist Qadir Temori as he races against time to save a 5,000-year-old archaeological site in Afghanistan from imminent demolition. A Chinese state-owned mining company is closing in on the ancient site, eager to harvest $100 billion dollars worth of copper buried directly beneath the archaeological ruins. Only 10% of Mes Aynak has been excavated, though, and some believe future discoveries at the site have the potential to redefine the history of Afghanistan and the history of Buddhism itself. Qadir Temori and his fellow Afghan archaeologists face what seems an impossible battle against the Chinese, the Taliban and local politics to save their cultural heritage from likely erasure. \u2014Brent E. Huffman",
          synopsis:
            "Saving Mes Aynak follows Afghan archaeologist Qadir Temori as he races against time to save a 5,000-year-old archaeological site in Afghanistan from imminent demolition. A Chinese state-owned mining company is closing in on the ancient site, eager to harvest $100 billion dollars worth of copper buried directly beneath the archaeological ruins. Only 10% of Mes Aynak has been excavated, though, and some believe future discoveries at the site have the potential to redefine the history of Afghanistan and the history of Buddhism itself. Qadir Temori and his fellow Afghan archaeologists face what seems an impossible battle against the Chinese, the Taliban and local politics to save their cultural heritage from likely erasure. \u2014Brent E. Huffman",
          yt_trailer_code: "",
          language: "fa",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/saving_mes_aynak_2014/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/saving_mes_aynak_2014/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/saving_mes_aynak_2014/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/saving_mes_aynak_2014/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/saving_mes_aynak_2014/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/217F786B191DC64705A8376E4CB98CAFE984B041",
              hash: "217F786B191DC64705A8376E4CB98CAFE984B041",
              quality: "720p",
              type: "web",
              seeds: 5,
              peers: 1,
              size: "535.23 MB",
              size_bytes: 561229332,
              date_uploaded: "2021-03-22 22:10:28",
              date_uploaded_unix: 1616447428,
            },
            {
              url: "https://yts.mx/torrent/download/2965B1117CDE7B5EA2D93A06749751DCC46B79DA",
              hash: "2965B1117CDE7B5EA2D93A06749751DCC46B79DA",
              quality: "1080p",
              type: "web",
              seeds: 4,
              peers: 2,
              size: "992.96 MB",
              size_bytes: 1041194025,
              date_uploaded: "2021-03-22 22:54:15",
              date_uploaded_unix: 1616450055,
            },
          ],
          date_uploaded: "2021-03-22 22:10:28",
          date_uploaded_unix: 1616447428,
        },
        {
          id: 3175,
          url: "https://yts.mx/movies/the-dark-knight-2008",
          imdb_code: "tt0468569",
          title: "The Dark Knight",
          title_english: "The Dark Knight",
          title_long: "The Dark Knight (2008)",
          slug: "the-dark-knight-2008",
          year: 2008,
          rating: 9,
          runtime: 152,
          genres: ["Action", "Adventure", "Crime", "Drama", "Thriller"],
          summary:
            'Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as "The Joker" appears in Gotham, creating a new wave of chaos. Batman\'s struggle against The Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes. \u2014Leon Lombardi',
          description_full:
            'Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as "The Joker" appears in Gotham, creating a new wave of chaos. Batman\'s struggle against The Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes. \u2014Leon Lombardi',
          synopsis:
            'Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as "The Joker" appears in Gotham, creating a new wave of chaos. Batman\'s struggle against The Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes. \u2014Leon Lombardi',
          yt_trailer_code: "kmJLuwP3MbY",
          language: "en",
          mpa_rating: "PG-13",
          background_image:
            "https://yts.mx/assets/images/movies/The_Dark_Knight_2008/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/The_Dark_Knight_2008/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/The_Dark_Knight_2008/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/The_Dark_Knight_2008/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/The_Dark_Knight_2008/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/F5D61BF3D57082BA2EE1305DA5DF8DCD10D34539",
              hash: "F5D61BF3D57082BA2EE1305DA5DF8DCD10D34539",
              quality: "720p",
              type: "bluray",
              seeds: 29,
              peers: 33,
              size: "949.99 MB",
              size_bytes: 996136714,
              date_uploaded: "2015-11-01 02:20:06",
              date_uploaded_unix: 1446340806,
            },
            {
              url: "https://yts.mx/torrent/download/A54926C2E07B0E5F0243954330B599B31C804F0B",
              hash: "A54926C2E07B0E5F0243954330B599B31C804F0B",
              quality: "1080p",
              type: "bluray",
              seeds: 228,
              peers: 30,
              size: "1.70 GB",
              size_bytes: 1825361101,
              date_uploaded: "2015-11-01 02:20:12",
              date_uploaded_unix: 1446340812,
            },
            {
              url: "https://yts.mx/torrent/download/61BE42FB337B1B84F844B88FD904982A0A2330E3",
              hash: "61BE42FB337B1B84F844B88FD904982A0A2330E3",
              quality: "2160p",
              type: "bluray",
              seeds: 103,
              peers: 11,
              size: "7.52 GB",
              size_bytes: 8074538516,
              date_uploaded: "2020-05-26 17:14:13",
              date_uploaded_unix: 1590506053,
            },
          ],
          date_uploaded: "2015-11-01 02:20:06",
          date_uploaded_unix: 1446340806,
        },
        {
          id: 3305,
          url: "https://yts.mx/movies/the-godfather-part-ii-1974",
          imdb_code: "tt0071562",
          title: "The Godfather: Part II",
          title_english: "The Godfather: Part II",
          title_long: "The Godfather: Part II (1974)",
          slug: "the-godfather-part-ii-1974",
          year: 1974,
          rating: 9,
          runtime: 202,
          genres: ["Action", "Crime", "Drama"],
          summary:
            "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba. \u2014Keith Loh",
          description_full:
            "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba. \u2014Keith Loh",
          synopsis:
            "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba. \u2014Keith Loh",
          yt_trailer_code: "9O1Iy9od7-A",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/The_Godfather_Part_II_1974/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/The_Godfather_Part_II_1974/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/The_Godfather_Part_II_1974/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/The_Godfather_Part_II_1974/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/The_Godfather_Part_II_1974/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/B27022D09BC067D46BBDB65AE62348AB3F21C727",
              hash: "B27022D09BC067D46BBDB65AE62348AB3F21C727",
              quality: "720p",
              type: "bluray",
              seeds: 156,
              peers: 32,
              size: "1.30 GB",
              size_bytes: 1395864371,
              date_uploaded: "2015-11-01 02:36:45",
              date_uploaded_unix: 1446341805,
            },
            {
              url: "https://yts.mx/torrent/download/6C9124FE9A99B2001FAD76A76152691BC515A80D",
              hash: "6C9124FE9A99B2001FAD76A76152691BC515A80D",
              quality: "1080p",
              type: "bluray",
              seeds: 12,
              peers: 15,
              size: "2.70 GB",
              size_bytes: 2899102925,
              date_uploaded: "2015-11-01 02:36:50",
              date_uploaded_unix: 1446341810,
            },
            {
              url: "https://yts.mx/torrent/download/BAB595F912C144CEA3B001390384865B79F78D7C",
              hash: "BAB595F912C144CEA3B001390384865B79F78D7C",
              quality: "2160p",
              type: "web",
              seeds: 41,
              peers: 9,
              size: "9.01 GB",
              size_bytes: 9674413834,
              date_uploaded: "2020-09-06 08:21:12",
              date_uploaded_unix: 1599373272,
            },
          ],
          date_uploaded: "2015-11-01 02:36:45",
          date_uploaded_unix: 1446341805,
        },
        {
          id: 4253,
          url: "https://yts.mx/movies/12-angry-men-1957",
          imdb_code: "tt0050083",
          title: "12 Angry Men",
          title_english: "12 Angry Men",
          title_long: "12 Angry Men (1957)",
          slug: "12-angry-men-1957",
          year: 1957,
          rating: 9,
          runtime: 96,
          genres: ["Action", "Crime", "Drama"],
          summary:
            "The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, AND each other. Based on the play, all of the action takes place on the stage of the jury room. \u2014pjk",
          description_full:
            "The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, AND each other. Based on the play, all of the action takes place on the stage of the jury room. \u2014pjk",
          synopsis:
            "The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, AND each other. Based on the play, all of the action takes place on the stage of the jury room. \u2014pjk",
          yt_trailer_code: "OvebOqneLIU",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/12_Angry_Men_1957/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/12_Angry_Men_1957/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/12_Angry_Men_1957/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/12_Angry_Men_1957/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/12_Angry_Men_1957/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/A303CAA20F46AAB9BBE75DA62B90E375FA03578A",
              hash: "A303CAA20F46AAB9BBE75DA62B90E375FA03578A",
              quality: "720p",
              type: "bluray",
              seeds: 62,
              peers: 14,
              size: "700.07 MB",
              size_bytes: 734076600,
              date_uploaded: "2015-10-31 20:46:02",
              date_uploaded_unix: 1446320762,
            },
            {
              url: "https://yts.mx/torrent/download/4DB3FDD949B99781E6AB1979BA476EC3E932970C",
              hash: "4DB3FDD949B99781E6AB1979BA476EC3E932970C",
              quality: "1080p",
              type: "bluray",
              seeds: 124,
              peers: 27,
              size: "1.52 GB",
              size_bytes: 1632087572,
              date_uploaded: "2018-04-28 02:11:22",
              date_uploaded_unix: 1524874282,
            },
          ],
          date_uploaded: "2015-10-31 20:46:02",
          date_uploaded_unix: 1446320762,
        },
        {
          id: 9717,
          url: "https://yts.mx/movies/natsamrat-2016",
          imdb_code: "tt5311546",
          title: "Natsamrat",
          title_english: "Natsamrat",
          title_long: "Natsamrat (2016)",
          slug: "natsamrat-2016",
          year: 2016,
          rating: 9,
          runtime: 166,
          genres: ["Action", "Drama", "Family"],
          summary:
            'The film is a tragedy about a veteran theatre actor named Ganpat "Appa" Belwalkar (Nana Patekar) who has been the best of his lot during his heyday, garnering fame and fortune acting in plays based on various works, especially William Shakespeare\'s. It is a tragedy of a veteran actor who enjoyed a very vital importance in his life but who becomes the victim of old age alienation and estrangement. The film reveals an intensely tragic fate of an actor who becomes victim of fate and fortune in old age, which is similar to the fate of Lear. Natsamrat suffers the pangs of old age and dishonor inflicted on him by his own children. It is a tragedy of great humanist and actor who succumbs to the ill fate and destiny. In fact, Natsamrat is a story of Ganpatrao Belvalkar, who withstands great suffering after his retirement from stage acting.',
          description_full:
            'The film is a tragedy about a veteran theatre actor named Ganpat "Appa" Belwalkar (Nana Patekar) who has been the best of his lot during his heyday, garnering fame and fortune acting in plays based on various works, especially William Shakespeare\'s. It is a tragedy of a veteran actor who enjoyed a very vital importance in his life but who becomes the victim of old age alienation and estrangement. The film reveals an intensely tragic fate of an actor who becomes victim of fate and fortune in old age, which is similar to the fate of Lear. Natsamrat suffers the pangs of old age and dishonor inflicted on him by his own children. It is a tragedy of great humanist and actor who succumbs to the ill fate and destiny. In fact, Natsamrat is a story of Ganpatrao Belvalkar, who withstands great suffering after his retirement from stage acting.',
          synopsis:
            'The film is a tragedy about a veteran theatre actor named Ganpat "Appa" Belwalkar (Nana Patekar) who has been the best of his lot during his heyday, garnering fame and fortune acting in plays based on various works, especially William Shakespeare\'s. It is a tragedy of a veteran actor who enjoyed a very vital importance in his life but who becomes the victim of old age alienation and estrangement. The film reveals an intensely tragic fate of an actor who becomes victim of fate and fortune in old age, which is similar to the fate of Lear. Natsamrat suffers the pangs of old age and dishonor inflicted on him by his own children. It is a tragedy of great humanist and actor who succumbs to the ill fate and destiny. In fact, Natsamrat is a story of Ganpatrao Belvalkar, who withstands great suffering after his retirement from stage acting.',
          yt_trailer_code: "DCXDyIsPEN8",
          language: "mr",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/natsamrat_2016/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/natsamrat_2016/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/natsamrat_2016/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/natsamrat_2016/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/natsamrat_2016/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/9C2440F9D38F769B768660FE715D36572776F681",
              hash: "9C2440F9D38F769B768660FE715D36572776F681",
              quality: "720p",
              type: "web",
              seeds: 19,
              peers: 1,
              size: "1.37 GB",
              size_bytes: 1471026299,
              date_uploaded: "2018-11-12 08:18:51",
              date_uploaded_unix: 1542007131,
            },
            {
              url: "https://yts.mx/torrent/download/5ACEB9A75BD576A15EDA44E196E6569F052AA28D",
              hash: "5ACEB9A75BD576A15EDA44E196E6569F052AA28D",
              quality: "1080p",
              type: "web",
              seeds: 18,
              peers: 0,
              size: "2.64 GB",
              size_bytes: 2834678415,
              date_uploaded: "2018-11-12 10:38:01",
              date_uploaded_unix: 1542015481,
            },
          ],
          date_uploaded: "2018-11-12 08:18:51",
          date_uploaded_unix: 1542007131,
        },
        {
          id: 21870,
          url: "https://yts.mx/movies/david-attenborough-a-life-on-our-planet-2020",
          imdb_code: "tt11989890",
          title: "David Attenborough: A Life on Our Planet",
          title_english: "David Attenborough: A Life on Our Planet",
          title_long: "David Attenborough: A Life on Our Planet (2020)",
          slug: "david-attenborough-a-life-on-our-planet-2020",
          year: 2020,
          rating: 9,
          runtime: 83,
          genres: ["Action", "Biography", "Documentary"],
          summary:
            "One man has seen more of the natural world than any other. This unique feature documentary is his witness statement. In his 93 years, David Attenborough has visited every continent on the globe, exploring the wild places of our planet and documenting the living world in all its variety and wonder. Now, for the first time he reflects upon both the defining moments of his lifetime as a naturalist and the devastating changes he has seen. Honest, revealing and urgent, DAVID ATTENBOROUGH: A LIFE ON OUR PLANET is a powerful first-hand account of humanity's impact on nature and a message of hope for future generations. Created by award-winning natural history filmmakers Silverback Films and global conservation organization WWF, the film is Directed by Alastair Fothergill, Jonnie Hughes and Keith Scholey and Executive Produced by Colin Butfield. Celebrated British naturalist Sir David Attenborough has a broadcasting career spanning over eight decades. He has visited every continent on the globe, exploring the wild places of our planet and bringing the wonders of the living world to audiences worldwide through groundbreaking natural history series. His work includes: Life on Earth, Planet Earth and more recently the Netflix original documentary series Our Planet.",
          description_full:
            "One man has seen more of the natural world than any other. This unique feature documentary is his witness statement. In his 93 years, David Attenborough has visited every continent on the globe, exploring the wild places of our planet and documenting the living world in all its variety and wonder. Now, for the first time he reflects upon both the defining moments of his lifetime as a naturalist and the devastating changes he has seen. Honest, revealing and urgent, DAVID ATTENBOROUGH: A LIFE ON OUR PLANET is a powerful first-hand account of humanity's impact on nature and a message of hope for future generations. Created by award-winning natural history filmmakers Silverback Films and global conservation organization WWF, the film is Directed by Alastair Fothergill, Jonnie Hughes and Keith Scholey and Executive Produced by Colin Butfield. Celebrated British naturalist Sir David Attenborough has a broadcasting career spanning over eight decades. He has visited every continent on the globe, exploring the wild places of our planet and bringing the wonders of the living world to audiences worldwide through groundbreaking natural history series. His work includes: Life on Earth, Planet Earth and more recently the Netflix original documentary series Our Planet.",
          synopsis:
            "One man has seen more of the natural world than any other. This unique feature documentary is his witness statement. In his 93 years, David Attenborough has visited every continent on the globe, exploring the wild places of our planet and documenting the living world in all its variety and wonder. Now, for the first time he reflects upon both the defining moments of his lifetime as a naturalist and the devastating changes he has seen. Honest, revealing and urgent, DAVID ATTENBOROUGH: A LIFE ON OUR PLANET is a powerful first-hand account of humanity's impact on nature and a message of hope for future generations. Created by award-winning natural history filmmakers Silverback Films and global conservation organization WWF, the film is Directed by Alastair Fothergill, Jonnie Hughes and Keith Scholey and Executive Produced by Colin Butfield. Celebrated British naturalist Sir David Attenborough has a broadcasting career spanning over eight decades. He has visited every continent on the globe, exploring the wild places of our planet and bringing the wonders of the living world to audiences worldwide through groundbreaking natural history series. His work includes: Life on Earth, Planet Earth and more recently the Netflix original documentary series Our Planet.",
          yt_trailer_code: "sbUNXyOQr40",
          language: "en",
          mpa_rating: "PG",
          background_image:
            "https://yts.mx/assets/images/movies/david_attenborough_a_life_on_our_planet_2020/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/david_attenborough_a_life_on_our_planet_2020/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/david_attenborough_a_life_on_our_planet_2020/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/david_attenborough_a_life_on_our_planet_2020/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/david_attenborough_a_life_on_our_planet_2020/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/1BCE2AE49812E11591EFB8AA0314A6C0FEC209E7",
              hash: "1BCE2AE49812E11591EFB8AA0314A6C0FEC209E7",
              quality: "720p",
              type: "web",
              seeds: 30,
              peers: 7,
              size: "770.33 MB",
              size_bytes: 807749550,
              date_uploaded: "2020-10-04 16:57:50",
              date_uploaded_unix: 1601823470,
            },
            {
              url: "https://yts.mx/torrent/download/CD2A82EDF1131C948E29D08E03C4BD1B6E6F38F3",
              hash: "CD2A82EDF1131C948E29D08E03C4BD1B6E6F38F3",
              quality: "1080p",
              type: "web",
              seeds: 124,
              peers: 17,
              size: "1.55 GB",
              size_bytes: 1664299827,
              date_uploaded: "2020-10-04 19:04:12",
              date_uploaded_unix: 1601831052,
            },
            {
              url: "https://yts.mx/torrent/download/97907C67FCB48F9964C4DCB9C1715E9CE2D9AE17",
              hash: "97907C67FCB48F9964C4DCB9C1715E9CE2D9AE17",
              quality: "2160p",
              type: "web",
              seeds: 41,
              peers: 7,
              size: "3.7 GB",
              size_bytes: 3972844749,
              date_uploaded: "2020-10-10 14:14:54",
              date_uploaded_unix: 1602332094,
            },
          ],
          date_uploaded: "2020-10-04 16:57:50",
          date_uploaded_unix: 1601823470,
        },
        {
          id: 22032,
          url: "https://yts.mx/movies/holbrooktwain-an-american-odyssey-2014",
          imdb_code: "tt1745718",
          title: "Holbrook/Twain: An American Odyssey",
          title_english: "Holbrook/Twain: An American Odyssey",
          title_long: "Holbrook/Twain: An American Odyssey (2014)",
          slug: "holbrooktwain-an-american-odyssey-2014",
          year: 2014,
          rating: 9,
          runtime: 93,
          genres: ["Action", "Documentary"],
          summary:
            'HOLBROOK/TWAIN: AN AMERICAN ODYSSEY chronicles the triumphant and tumultuous history of the longest-running one-man show in the history of theatre, Hal Holbrook\'s Tony and Emmy Award-winning masterpiece, "Mark Twain Tonight!"',
          description_full:
            'HOLBROOK/TWAIN: AN AMERICAN ODYSSEY chronicles the triumphant and tumultuous history of the longest-running one-man show in the history of theatre, Hal Holbrook\'s Tony and Emmy Award-winning masterpiece, "Mark Twain Tonight!"',
          synopsis:
            'HOLBROOK/TWAIN: AN AMERICAN ODYSSEY chronicles the triumphant and tumultuous history of the longest-running one-man show in the history of theatre, Hal Holbrook\'s Tony and Emmy Award-winning masterpiece, "Mark Twain Tonight!"',
          yt_trailer_code: "",
          language: "en",
          mpa_rating: "",
          background_image:
            "https://yts.mx/assets/images/movies/holbrooktwain_an_american_odyssey_2014/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/holbrooktwain_an_american_odyssey_2014/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/holbrooktwain_an_american_odyssey_2014/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/holbrooktwain_an_american_odyssey_2014/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/holbrooktwain_an_american_odyssey_2014/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/20A061A242D1CF1F21DE67A67830724146A1FD5C",
              hash: "20A061A242D1CF1F21DE67A67830724146A1FD5C",
              quality: "720p",
              type: "web",
              seeds: 3,
              peers: 0,
              size: "855.4 MB",
              size_bytes: 896951910,
              date_uploaded: "2020-10-10 23:27:19",
              date_uploaded_unix: 1602365239,
            },
            {
              url: "https://yts.mx/torrent/download/8DCDEC4FD107EF381C0D052844BE9405F1A04343",
              hash: "8DCDEC4FD107EF381C0D052844BE9405F1A04343",
              quality: "1080p",
              type: "web",
              seeds: 4,
              peers: 1,
              size: "1.72 GB",
              size_bytes: 1846835937,
              date_uploaded: "2020-10-11 01:22:10",
              date_uploaded_unix: 1602372130,
            },
          ],
          date_uploaded: "2020-10-10 23:27:19",
          date_uploaded_unix: 1602365239,
        },
        {
          id: 31736,
          url: "https://yts.mx/movies/dara-of-jasenovac-2020",
          imdb_code: "tt10554232",
          title: "Dara of Jasenovac",
          title_english: "Dara of Jasenovac",
          title_long: "Dara of Jasenovac (2020)",
          slug: "dara-of-jasenovac-2020",
          year: 2020,
          rating: 9,
          runtime: 130,
          genres: ["Action", "Drama", "War"],
          summary:
            'The film is set in the Nazi-occupied Croatian Ustasha regime "NDH" in former Yugoslavia during WWII. The film is told through the experiences of a little girl named Dara who is sent as a child during the Holocaust in the Balkans to the infamous extermination camp complex Jasenovac, also known as "Balkan\'s Auschwitz", when it was ruled by sadistic camp commander Maks Luburic until the liberation. The film is the first modern WWII movie that takes place in or shows this NDH era camp. \u2014Natasa Drakulic',
          description_full:
            'The film is set in the Nazi-occupied Croatian Ustasha regime "NDH" in former Yugoslavia during WWII. The film is told through the experiences of a little girl named Dara who is sent as a child during the Holocaust in the Balkans to the infamous extermination camp complex Jasenovac, also known as "Balkan\'s Auschwitz", when it was ruled by sadistic camp commander Maks Luburic until the liberation. The film is the first modern WWII movie that takes place in or shows this NDH era camp. \u2014Natasa Drakulic',
          synopsis:
            'The film is set in the Nazi-occupied Croatian Ustasha regime "NDH" in former Yugoslavia during WWII. The film is told through the experiences of a little girl named Dara who is sent as a child during the Holocaust in the Balkans to the infamous extermination camp complex Jasenovac, also known as "Balkan\'s Auschwitz", when it was ruled by sadistic camp commander Maks Luburic until the liberation. The film is the first modern WWII movie that takes place in or shows this NDH era camp. \u2014Natasa Drakulic',
          yt_trailer_code: "7RDs2Vuw_AQ",
          language: "sr",
          mpa_rating: "R",
          background_image:
            "https://yts.mx/assets/images/movies/dara_of_jasenovac_2020/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/dara_of_jasenovac_2020/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/dara_of_jasenovac_2020/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/dara_of_jasenovac_2020/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/dara_of_jasenovac_2020/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/420C53C917E40EB8D6335006C5221822404AE630",
              hash: "420C53C917E40EB8D6335006C5221822404AE630",
              quality: "720p",
              type: "web",
              seeds: 44,
              peers: 9,
              size: "1.18 GB",
              size_bytes: 1267015352,
              date_uploaded: "2021-05-16 14:08:50",
              date_uploaded_unix: 1621166930,
            },
            {
              url: "https://yts.mx/torrent/download/4BA7FE6625F3B1F21A25276E56A8A7A0864095B8",
              hash: "4BA7FE6625F3B1F21A25276E56A8A7A0864095B8",
              quality: "1080p",
              type: "web",
              seeds: 48,
              peers: 6,
              size: "2.42 GB",
              size_bytes: 2598455214,
              date_uploaded: "2021-05-16 15:30:48",
              date_uploaded_unix: 1621171848,
            },
          ],
          date_uploaded: "2021-05-16 14:08:50",
          date_uploaded_unix: 1621166930,
        },
        {
          id: 2429,
          url: "https://yts.mx/movies/pulp-fiction-1994",
          imdb_code: "tt0110912",
          title: "Pulp Fiction",
          title_english: "Pulp Fiction",
          title_long: "Pulp Fiction (1994)",
          slug: "pulp-fiction-1994",
          year: 1994,
          rating: 8.9,
          runtime: 154,
          genres: ["Action", "Crime", "Drama"],
          summary:
            "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents. \u2014Soumitra",
          description_full:
            "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents. \u2014Soumitra",
          synopsis:
            "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents. \u2014Soumitra",
          yt_trailer_code: "tGpTpVyI_OQ",
          language: "en",
          mpa_rating: "R",
          background_image:
            "https://yts.mx/assets/images/movies/Pulp_Fiction_1994/background.jpg",
          background_image_original:
            "https://yts.mx/assets/images/movies/Pulp_Fiction_1994/background.jpg",
          small_cover_image:
            "https://yts.mx/assets/images/movies/Pulp_Fiction_1994/small-cover.jpg",
          medium_cover_image:
            "https://yts.mx/assets/images/movies/Pulp_Fiction_1994/medium-cover.jpg",
          large_cover_image:
            "https://yts.mx/assets/images/movies/Pulp_Fiction_1994/large-cover.jpg",
          state: "ok",
          torrents: [
            {
              url: "https://yts.mx/torrent/download/D55F1E840F1BD6576EAD67A4D04E5D6EA294414B",
              hash: "D55F1E840F1BD6576EAD67A4D04E5D6EA294414B",
              quality: "720p",
              type: "bluray",
              seeds: 69,
              peers: 30,
              size: "751.29 MB",
              size_bytes: 787784663,
              date_uploaded: "2015-11-01 01:52:11",
              date_uploaded_unix: 1446339131,
            },
            {
              url: "https://yts.mx/torrent/download/3F8F219568B8B229581DDDD7BC5A5E889E906A9B",
              hash: "3F8F219568B8B229581DDDD7BC5A5E889E906A9B",
              quality: "1080p",
              type: "bluray",
              seeds: 289,
              peers: 110,
              size: "1.40 GB",
              size_bytes: 1503238554,
              date_uploaded: "2015-11-01 01:52:15",
              date_uploaded_unix: 1446339135,
            },
          ],
          date_uploaded: "2015-11-01 01:52:11",
          date_uploaded_unix: 1446339131,
        },
      ],
    },
    "@meta": {
      server_time: 1625465526,
      server_timezone: "CET",
      api_version: 2,
      execution_time: "0.01 ms",
    },
  },
};

export default useAxios;
