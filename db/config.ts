import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    email: column.text(),
    nickname: column.text(),
    firstName: column.text(),
    lastName: column.text(),
    hashedPassword: column.text(),
    salt: column.text(),
    resetToken: column.text(),
    resetTokenExpiresAt: column.date(),
    twitter: column.text(),
    facebook: column.text(),
    youtube: column.text(),
    linkedin: column.text(),
    github: column.text(),
  }
})

const Link = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    link: column.text(),
    submittedById: column.text({ references: () => User.columns.id }),
    createdAt: column.date(),
    updatedAt: column.date(),
  }
})

const LinkUserVote = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    linkId: column.text({ references: () => Link.columns.id }),
    userId: column.text({ references: () => User.columns.id }),
    direction: column.text(),
    createdAt: column.date(),
  }
})

// const FavoriteLinkUser = defineTable({})

// const Comment = defineTable({})

// const CommentUserVote = defineTable({})

export default defineDb({
  tables: { User, Link, LinkUserVote }
});
