create table users
(
    id               bigint generated always as identity primary key,
    user_name        varchar(30) not null,
    height           numeric,
    weight           numeric,
    age              smallint,
    gender           varchar(20) not null,
    goal             varchar(200) not null,
    activity_level   varchar(200) not null,
    chad_personality varchar(200) not null
);

comment on table users is 'Table with user data';

create table activities
(
    id            bigint generated always as identity primary key,
    date          date,
    time          time,
    user_id       bigint not null,  -- Changed from user_name
    activity_name varchar(120) not null,
    sets          smallint,
    repetitions   smallint,
    duration      smallint,
    FOREIGN KEY (user_id) references users (id)  -- Reference primary key
);

comment on table activities is 'Table with user activities.';

alter table users
    owner to avnadmin;

drop table users;
drop table activities;