import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            About Me
          </span>
          <span>I am a web developer</span>
          <span>
            Currently, I am working on client side full stack projects. 
            <br />
          and dedicated and efficient Full
Stack Developer having

            <br />
            hands-on
acquaintance with developing clients
            <br />
           side projects and server-side projects
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src="https://raw.githubusercontent.com/BrijeshPrajapati8858/Brijesh/main/assets/images/react-logo.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="data:image/png;base64,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" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4t2xif5AVdjEjrP1NYRNjWULFXolThpP0w&usqp=CAU" alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAABUFBMVEX///9BLx+BxWRPlUaDyWZSmUlMkkSOcU5QlkZVnEtaqU17w1xUp0pjrVNMkUR+xGA+JRtELSJusltBKR1BLB5hrFKLbUhxs15Xp0x3t2Svm4bf186HaEB9umo8IhRbn084HAk9IBmDvXGVelnw7u3Fv7z08u8zEgCb0IP3+/Vlh0d+vWDTzsw3GAAlAABNOC2LgHu7362n1pTo9ONUYDVyo1RXZzhENCI7GhdPUy/X7M9tmE+jjHDd2tgyEACDYjdsXFTF5LhjgUTO58RJQiiKyW+t2Jzg8NpcdT7Hwb5fTUR8b2mpoJwtAQCSzHprlE1MSytHZjPDtaWgl5JkUkqyqqeUioY6ExVWYj1yj1yMvHlRhkJnfE52oGFQdz1WjENJdzZGXTCFoWuapHqtqImJqW++uZ3MyK9walWWkHOoootWSDW0rpvY1cHl49EgAADUdjDoAAATHklEQVR4nO2d+UPiyLbHFXHBjcSkodslQsuiAo0b0i7QqLhho46g78707W3G1z33ztz3/v/fXlXWU0mlktgUYD++vxhIiPXJOXXOqco2NDTQQAMNNNBAAw000EADDTTQQAM9R61tb5+f7++fHG2enW1trRra2jrbPDrZ3z8/P99e63Ubg2rtfP9kc+v69DQUik6pitqlfxkKnV6vniHQ7V632Vtr2ydnW6unUbXlIT+KhlTQ0PXq1lHfmnFte/8MU0WjPqnskFGV8Kjv+JC5rn2bygtwa/O8b/jOz1YR149iAUDMd9QHeOdnpx2wF41v9aSneNtH0U4azIG3td8rsn3kirzADLzQZg+Mt3Zyys9kQKjrdTv3HZ36MlnYSz72EY12lW7/mk2mtTuXy8XjpYP144vd3d0dIPTx4mL9phSPx3O5kDdjNHTWLc/c3mJ4owqFkI53d/bq5WEhmRQESZeMpS8LAloll+u3ezsXB6W4iuhONxU66QraSciNDLUuV1q/2K1LQlLAJMPewrCIv7x3cVxiAU51wTHXtujuiBt1cLEz/BaZyQ+TgxEdj+Tt7rErXzTEOyGsUXsaak3pop5MPonKBji8c5Oj400d8WVbdaKh/nWz+19J4Qe5TEnC2/J6iYY3xdVyJ3Y01IKDHVmQOsRlSBDqx3EHXfSaJ9upnSx+XJc6DaZKFob3SiEb3RTHaEmaLRwu7Q4LQRqMkkIASdLtjY3ulB8bYbZwfFcOFjzkf+wEs7GctNHx63HnwGzh3HEwmyEpv94E9V9Z2CsBuOgqL7ZNiy1cqgclGx4u/xbfCxxNZeEiBwzHiw2iPSHkJ39djX8IfkSGk7uW5XjluG3AFrDjqE385+vfXkWCGw6ZLm7CRbf4sAGXzAVv4NtfX7/+bSky8gQ24RgYjg/bqlkjh9eDupYsf3yN2F5HIp+SgdnkOmA758Jmlf/hnYBHXy5jNGy3SORr8C4nW7GST4cDGSD8NDQkxBYJ3leFdc4dzupuKEoGRVsCbJG9wFluz3LKKI8h+NmTu5v8cYlge0KwBB2OBxsIJbuBDrywvmRji9wGhBOs9M0jmKyBUBLIbMmLVw62SD0YHOhwU5udZwOZO/c2QLOkvVeYbYlkmy0HgpMuuAaTExBKkgGaVX5FY4t8CMa2Y7FxKJePLLabAD6ZPKCzRT4FcuyyFUxOOx9MQJi88N8s4eKVzrZkY4t8DRKQ3ppoPJLAlsXmP/nKt/F4HBoOsI0GiSdvrXJ5qvMTlVYKCPmP4PLBnCtb5HMAwyUPLLaOj73XwHyC71kPaXfOstuSnS3yi3844YZjRblmoYX8mk0uL89pdntFZQuQ5bgmuG1wEiDpt0Gf5ubmyA5Hsn3wbTgwhIuedZwteOqWb+cItiUHm/9YCZM3RzbfqVtYnzHZDMMtk2yf/XZdeSfUFbYbf2zy7YzOFndl8x1O5FuLreNFlzUy9TvCET6obKRT2tl815V1jmz7FtuxLza5PuNkW7KzRX7xW+NYbB0vKEGp7K/kkj7NzDid0mAb1YUM5w9NAGydLrogm68+klyecRoO222UkN8eB9iuO812FJBN3pmhsL1eHrUpMuuvw4GRd8/ZcCRxOuWSg2004m8+MNlHbPKLFzTDUdj8nSLoIzb56wsNbo5M3062UX9jHZ5sAWOJ8PkF1XAUtsgnXz7OMZYEzAHCi0m/bKOzfpwS5oAOowXM3fLe5CQwnOWUNDZ/s5Uc2YLVXMIHgs0yHJXNT4rjWXMFq5Xlz5OTVKeksY36SHFca+VgY5zy5CTFKd3YIt4Fc7fGON5jU9zd6E5JZ/N2Sr5j0yBzCtIv05N0p1yeoMF5TzLznVOw0EKeR1n4MP3S4ZQqHJ1t1muHxNnFjs8FrZ1ahvMeloxMuzglhW1iYsI7C8B5rs7P4V1bbF5Fklx/ic1Gc0qCbcLQqGeH4zr3CubMQ16nPeVb5JLAKedMpzTYJkiNfvFkK/GcMz/zf9oUs710ZgFsuOUJmryDyVtw4rTz5zo2/Rdd8tfpaTub7pTLI1Q2z5kFAVyw1nk2UCwfJD0a8mWadEodzpVtwmv2XL61wmTHhwFEsRz3Yvs87XRKzXB0n/QMlNIu1/OmASbNpdlp3SkdkZLCNoI06hGeBJ5lCXEiJ+wVSzQ2Z6S0sY2YGv3qwcbzFNVQoOtLJqYpTqlGymUb1IjW/7xOegjgtCmPi9UCXBeE2eiRcnmChDICpYfdJM7XBW36vlChrLG9tDkljpTLDiyNjV2YEBcZ8mDzHygNNsogziUHeLBxDpMomIBrDD1SrcpGc0p6DhhBbEyfFA64XvI0BO8O8Lo2dGzaYTi9wznYjDjJ9klQTfK5tWPLbzCRDTbnIG7ZTuWHTbYmuXhUylhgarnEtJuau+npe5lk8pffQHcLRbmgEbd1MDscrrmokRKx0ci86hKQuXldQw+DCbPDSZ8obDNMNmY9Cbsbn1BCVCYHrA4n702TTmkZzo2NNQ4AgwBel9ATHS7OQMNj02lnpJxhsDHHb2D+jld3I6+iZzmRXJ92c0oK29jY2MgXZncrcc7cqsAly8wsIM9Cp4Tpe3kMUmEurBHWaSq5DuYT+N24CDIcMwvggTfdKU22MagJVslFZAB+N3mDezLDrKgtfXVzyuUxkkoTM5QAl+R5TyYcn7Kc0uxwjvS9TCEbG2HNK8u3wCV53uENskCOFdqsDmczXITGNsGawoM3iEV5ZQCsfeCUrMG35NbhqHZjdzdwYx/X+7uhU7JOw8llgs1yysgsjY3R3cCdAfyKEk1g5pw5dS5M0JzSxSdnGWZLwtuE+T4KAzol69yw9AvdKUcDuiQ4F8wzcWsCp3NyrMgtEZGSzcbYT/IGuCTvh3wcAcOtMwxnpW9i8nzU2d9GGBc9ydblCVxuViEF7xNgjeJATQkNN+E02whjzE2YjW8kwToDRSWrxyU/0JwSVCWzmsYYV2AQZuMcSbDgSf0wo6eAgQ5wyhGIpbExIgmY3+JyHsAhkAaYN9UKHyhOOUtgqZzujg1voeU1CUSKeBoG45Yquf7SjQ32NlYCiAOzcZoosQka7hUrfzunTV6g7mXL2+5mAyemumQ24kycxxh1wm64F5BMXXYPkkQg6UpvwzqDj9Zh3Igu7dkjpVkqGz2OMQKQYLXF5QwHTWvQcCWG3fThgOWUy7NEjJyddZ92IT2Sf24zdOTTK2X7GZ1lkowRSOAsCdfxtkOn8JF4LK+8JZzyRYnMAR8YJic8spvPD92HhoszSi9tPGA65ccxmARm3VM/HG3zHwCQOoPVCet6E7X0Mp3yd5+FpLQXguruk0OJkjm8y0gE0oQ1JTTzO4iTY4y714Uc9EjOz/hzCHolc5ZZLkfMqYW5P6w4OfbFHe1td57J5SqY5MI55rzwS73DTcYfb6w4whjZwM7G4/otL8GLRdlFs3T7UnfK0uNHE839+mthB6LxfL6fq84Jr2TVXtLeS80rS4+/j+lo7iFSuoWZbao7NbJdmwQc604WDIft9t+Pj55ocj0OzcZ9IsFFq8RDbXfYcAht+o/HR5zhxr64O6RcLhEeyXMmmSX4HIJQmFWfDEv1UQT3x+O3P1AC+DLMCKskWrfDvyUyEeTqrGg5PDs59/j4DcGxHj4GJ396Ev4tbdrgWCdTk18+YrbvfyruG70l0HoR/oGIpy2jypJ1xjH5L8z27wQDbZ1A69JY21XXUd9w8p+q2dy3sKP17O0BuogU7gH3F2L7xrCrDa13ccTQOdFBwnFGQJExm2tvE2xo3ZohYWk/Slru1hVO+fe3765sMhlGelSP2GV76nJuzy3GK//69v1veiiRhw9ItI4/NOGJOrLBuVUo8p9ubLZqhMsNDk/UJgkX2k26sH2ns0lkDRmK9qqKpImEQ6MC6t0Rco3OJtzmSLTe5my77HD05y//9f0/d0625G64n9GccPFbZ6eTEdt3O5tsi/395ZCa7HA55wQRZvuPjU2ql2xo1334Lrgj8hUl4dC6Yyjz1/f/sbEJO2RX65/gT+rE9v6VcMnhl+3WHczdsnwcehZo9gpF9UvbCwZkBZpNsPsjqkb6FA3XlnbTHZQZZ7N3c3a0fqgh3bRtf00VKlKSLmRlu9H6ofJnyvFqoPAB7f0QcvLCbrRoz+Z9fGvTARe6cLxjJnnrNFo/xn679h3vqwqX9pIwpgjldfvbYfo5ikBtO97rFA7dWK/3kCSHO4ai0T7vaqbWzuxw+LUsZZVOlvacLyyaOu37rmaJ8h61cO6iLEjSXsn5oqln4o+GnH6J6+cLGtnz8UdTm86X+1FfPvgs4qNdNNM5FO3ilSMd1ZHnW0KnVp+h0TRtU16FB8m69IZITjpxfw9qdKprb/bkpLVNlzcpT60+o5zmpu0tCt3U6bN2R0v7q7agMnXai1cgc9L+NaCbiv5EZFj7xmujp6Z+MjIs/Lpv/ELuXreDj7Y3V3t9KnSggQYaaKCBBuqsFlZWDrFWdM3fLYCV49pKbe3hXaV37XyK/l6JLcZisfHY+MrK+OIiXl65y+gr79BXMazxcXVNbD7V08YGVSZzh5oeu8sgpRbuVvCHQ9N2mbtF9HkBr5rHa1YyrH31oQ5j44sGTeZuHBvRckxENK4BLaCl2HwP2vcjmgdsuAciuJjpfAjIMNadxflsRLINVVaw8xmfAFsGr1iw/7q/ZWMbWkB9bPFO/wDYhrBFnzkb/sI0nI3th3yygpNIJp/OG5/TaXtaSeXT6TwZjfN4m8p9K01+XblMX9p/jb4zd67JwaYaTv8GsKXQt38Ho4GNbtUK90Oph2IikWjgBqTbSiKh1ODByl8pzWY1IdX0BqYq6Y1GtTWUr6FNE+K9teV9o/qmWZAa7yuVSuu9tvH7RrbZLCjF92CXDrYMjoh3Dra72OLhU83WVgoJKZG+FJtKQRElsZKqNavZhCQqDevfXhXEh/T9RkJSFLW5KRHBS4n79wV1Uyl7qW9ZaTSv8pX7BlqJdvZGZU4Xm7X7dKuB/k3bsqeDDWcFI9qbbDgPzj/ZI9FBRY1rFB8qKWQcvFRs5fOtoiRmDWtk2omG2qh8UUJAanuvJEkUi4Wr+8tWA/2qqO9MTFypf7V9XmFnvU8UWupeHhLoeJnu62SbJ9i0ymslFjv8kaIrhVpc0/4nglM21MNUQV8ahrtKFHS7VERsWXXxErW+qC6mapJY1Xx1I5HVFi6zYkHrnZWsUtP3s6GIiQd3NmSi2CFgQ0KlGUp7hz8QJtvIJ7WlfEJM6D3qfULMasD5pkk51EoYzUNHJNHSf1UQNWum0G90B0qIBW2fqEMa9scHUTQMR2cDPpnKmEXXD+QAiw03WF+sVMWqZqENRdkwNk2Jhv/hTfVGZ0RRUYHzVbGgszX0tammmDWd6gEZLu2XTd8RrljGF5/slxZbBmBWRd2/ipLSMrdF/qc5JWRDW6j0+axYTRlsmpveI0ObfQy5hXmY6P3NGSdxEjB9NbhqVLaCzpYpiIANHXrJzoZAtCaj42F8p0iK2jjkxIrJVimKypUr2yE1v2kV5bsfZwOLBJsZAXA3dGdDC3rXvMxmteOB2AomGwqf7mwZXBQPUdhwUn8yW9uFTe9vCetgq2wOn0Q70Nnum2jbFE5z1Stz+6xZkKTMg0BhQ4O2GK2eHEr9iN1Af6OxIWMUzX/USoBY8t7ONvSQFZRiraaYXpxGMdTYjDgedrYMcsmY8W9idrZYB9jaFDaUloz8BoImipgUNlyEFRu1lhnXUJwUasaHiihJxho7GzLbovlfYjaffProtGGxWYuprMGGIrvVvLag5PV2ikZ+g2ypq3aFqJHagnVk0gnLu21sCzFYEi/C8Sje8qlTJhAILV7a2VDTxYLuSpdKQqeoSFb4tLrRvZKw+qYqdGQko9KqKabZYPU4hGNhzBy8aWwmOAqTcFUwIQsYrQQNviyY8TxVkHQbVYrZmv6rNAqYOgZO6FrzL/8X7av90LoHo5wNFGe1cvShUDBiFrYTav+8CpBZOFxcHIdGxHZbUb9Izcdiscuhp+m+VlAkqdBABz5dQ8W9lC2ixct2Fi1Wi3pxKRakhLTRumo29WzQKhYkSVJEVIfm2wm8WG3gdhcVxImGPYVsNVvT8R6qipRtPzyIb4pGxLw7xK1HIWJxcWVl/N27d+OWZRYOVxa1dTFUUL57t/j0ccBGo4bVRtHvodjGi402Ct36t3oNjT5nq803aLCg/wpFjGKjURSbqaF0U10sVrGVU2h8oCCh6kVUCjpK/kpCP67WTKOlUImIsDTFVg7h1OvQ/CJYuTJ/14V5oFSl4qdDV5TGQ+tho4YsLQpt6+sKGWGGMpYoe1HnLVMp6rqe6b75oLUnk0YjQOmZzXcz9dC0omQeeedPxPa+mgU0baX4vGbyWUKJkmCzp7rnLFwEmLUjynqFPGPj5yZceZqGq715z9r2uSmVkMTqA472qXTx50LDBQyewpSKYuJN42dySFWpVkPJZhPFq6eWgH0tXE+k+qqeGGiggQYaaKCBBhpooP+n+j+7/Fk2f6R5WAAAAABJRU5ErkJggg==" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQaiY5QtLFwHWHjjPZMGRQOeRUgcxLjLOXuDFOLY9yzoLGe-1I6bUpIiWtKv1t5zrpsc&usqp=CAU" alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
