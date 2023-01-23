/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import parseDate from '../../helpers/parseDate';

const IntroSection = ({ posts }) => {
  return (
    <div sx={{
      maxWidth: '1190px',
      mx: 'auto',
      my: '42px',
      px: '24px',
    }}>
      <h2 sx={{
        fontFamily: 'Montserrat',
        fontSize: '36px',
        color: '#3E3667',
        fontWeight: '600',
        mb: '32px'
      }}>Recents</h2>
      <div sx={{
        display: 'grid',
        gridTemplateColumns: ['1fr', null, '3fr 2fr'],
        gridGap: '62px'
      }}>
        <div>
          <Link to={`/blog/${posts[0].slug}`}>
            <div sx={{
              height: 0,
              overflow: 'hidden',
              pt: '60%',
              position: 'relative'
            }}>
              <img
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src={posts[0].medium.url.proxy}
                srcSet={`
                          ${posts[0].medium.url.proxy}?rs:fill/w:100 100w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:400 400w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:600 600w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:1024 1024w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:1280 1280w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:1280 1280w
                          `}
                sizes="(max-width: 1280px) 100vw, 1280px"
                alt=""
              />
            </div>
            <div>
              <h2
                sx={{
                  my: '1rem',
                  color: '#1E1E1E',
                  fontSize: '26px',
                  fontWeight: '600',
                }}
              >
                {posts[0].title}
              </h2>
              <p
                sx={{
                  fontFamily: 'inter',
                  color: '#667085',
                  fontSize: '16px'
                }}
              >
                {posts[0].excerpt}
              </p>
            </div>
          </Link>


        </div>
        <div sx={{ display: 'flex', flexDirection: 'column' }}>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            <Link to={`/blog/${posts[1].slug}`}>
              <div sx={{
                height: 0,
                overflow: 'hidden',
                pt: '60%',
                position: 'relative'
              }}>
                <img sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                  src={posts[1].medium.url.proxy}
                  alt=""
                  srcSet={`
                          ${posts[1].medium.url.proxy}?rs:fill/w:100 100w,
                          ${posts[1].medium.url.proxy}?rs:fill/w:400 400w,
                          ${posts[1].medium.url.proxy}?rs:fill/w:600 600w,
                          ${posts[1].medium.url.proxy}?rs:fill/w:1024 1024w,
                          ${posts[1].medium.url.proxy}?rs:fill/w:1280 1280w,
                          ${posts[1].medium.url.proxy}?rs:fill/w:1280 1280w
                          `}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
              <h2
                sx={{
                  fontSize: '16px',
                  mt: '1rem',
                  color: '#1E1E1E',
                  fontWeight: '600',
                  fontFamily: 'Montserrat'
                }}
              >
                {posts[1].title}
              </h2>
            </Link>
          </div>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '42px'
          }}>
            <Link to={`/blog/${posts[2].slug}`}>
              <div sx={{
                height: 0,
                overflow: 'hidden',
                pt: '60%',
                position: 'relative'
              }}>
                <img
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  src={posts[2].medium?.url?.proxy}
                  srcSet={`
                          ${posts[0].medium.url.proxy}?rs:fill/w:100 100w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:400 400w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:600 600w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:1024 1024w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:1280 1280w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:1280 1280w
                          `}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  alt=""
                />
              </div>
              <h2
                sx={{
                  fontSize: '16px',
                  mt: '1rem',
                  color: '#1E1E1E',
                  fontWeight: '600',
                  fontFamily: 'Montserrat'

                }}
              >
                {posts[2].title}
              </h2>

            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection