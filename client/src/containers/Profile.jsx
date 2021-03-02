import React from 'react'
import { Container } from 'semantic-ui-react'
import { TextEditor } from '../components/Common/TextEditor'
import { Posts } from '../components/Profile/Posts'
import { User } from '../components/Profile/User'
import classes from '../css/profile.module.css'

export const Profile = () => {
    return (
      <Container>
        <section className={classes.profile}>
          <section className={classes.profile_left}>
            <section className="profile_left_user">
              <User></User>
            </section>
            <section className="profile_left_createPost">
              <TextEditor></TextEditor>
            </section>
          </section>
          <section className={classes.profile_right}>
              <Posts></Posts>
          </section>
        </section>
      </Container>
    );
}
