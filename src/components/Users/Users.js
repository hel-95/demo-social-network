import React from 'react'
import classes from './Users.module.scss'
import Paginator from '../common/Paginator/Paginator';
import User from './User';



const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

   return  (
    <div className={classes.container}>
         <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
          totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div className={classes.usergrid}>
            {
            users.map(u => <User user={u} followingInProcess={props.followingInProcess}
              follow={props.follow} unfollow={props.unfollow} key={u.id}/> 
         
            )}
            </div>
        </div>
    )
  }


export default Users;