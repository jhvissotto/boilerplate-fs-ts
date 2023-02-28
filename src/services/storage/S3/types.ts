import { AWS } from '~/src/libs/packages'

export type ObjectCannedACL = AWS.S3.ObjectCannedACL
export type ACL =
  | 'private'
  | 'public-read'
  | 'public-read-write'
  | 'authenticated-read'
  | 'aws-exec-read'
  | 'bucket-owner-read'
  | 'bucket-owner-full-control'
