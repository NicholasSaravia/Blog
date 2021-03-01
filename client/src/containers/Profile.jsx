import React from 'react'
import { Container } from 'semantic-ui-react'
import { TextEditor } from '../components/Common/TextEditor'
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
          <section className="profile_right"></section>
        </section>
      </Container>
    );
}
