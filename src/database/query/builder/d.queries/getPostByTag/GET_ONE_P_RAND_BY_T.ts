import { Args } from '~/src/database/query/builder'
import { replacer } from '~/src/database/query/builder/a.fns'
import { WITH, ORDER_BY } from '~/src/database/query/builder/b.commands'
import { tf_, tj_, tm_, tp_, tv_ } from '~/src/database/query/builder/c.tables'

// prettier-ignore
export function GET_ONE_P_RAND_BY_T(
    post: { 
        name: Args.Table 
        tv?:  Parameters<typeof tv_>[1],
        withTableVisible?: boolean,
    }, 
    tag: Parameters<typeof tf_>[1] & { 
        name: Args.Table 
        tv?:  Parameters<typeof tv_>[1],
        tf?:  Parameters<typeof tf_>[2]
        withTableVisible?: boolean,
    }, 
    opts?: {
        tj?:    Parameters<typeof tj_>[1],
        order?: Parameters<typeof ORDER_BY>[1] 
    }
) {



    let qs = `-- sql
        -- WITH 

        -- # optional 
        -- tv_post,
        -- tv_tag,

        -- # required 
        -- tj_post_tag,
        -- tf_tag,
        


        ${WITH([
            [tv_(post.name, post.tv), { disable: !post.withTableVisible }],
            [tv_(tag.name,  tag.tv),  { disable: !tag.withTableVisible  }],

            [tj_([post.name, tag.name], opts?.tj)],
            [tf_(  tag.name, tag,        tag?.tf)],
        ])}


        
        tq_getPostByTag AS (
            SELECT tj_post_tag.*
            FROM   tj_post_tag
        
            JOIN tf_tag     ON  tj_post_tag.pk_tag  =  tf_tag.pk_tag
        
            -- /*withTVPost*/ JOIN tv_post    ON  td_post.pk_post     =  tv_post.pk_post
            -- /*withTVTag*/  JOIN tv_tag     ON  td_tag.pk_tag       =  tv_tag.pk_tag
        )
        

        
        SELECT *
        FROM tq_getPostByTag

        
        -- ORDER BY RAND()
        ${ORDER_BY('WEIGHT_RAND', opts?.order)}
        LIMIT 1
    `



    qs = replacer(qs, {
        comments: {
            withTVPost: post?.withTableVisible,
            withTVTag:   tag?.withTableVisible,
        },
        names: {
            post: post.name,
            tag:  tag.name,
        },
    })



    // console.log('qs', qs)
    return qs
}
